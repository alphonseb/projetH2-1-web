<template>
    <div class="createProfile">
        <img class="desktop-tree" src="../assets/bg-tree.jpg" alt="Arbre">
        <div class="desktop-disclaimer">
            Merci pour votre inscription à
            <strong>Shelf</strong>.
            Pour l'instant
            <strong>Shelf</strong> n'est disponible uniquement sur mobile. Emparez-vous de votre téléphone et commencez à raconter votre histoire !
        </div>
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt>
            <h2>Créer mon profil</h2>
        </div>
        <main>
            <div class="profilCreation">
                <label for="profilePicture">
                    <div class="addPhotoContainer">
                        <div class="addPhoto">
                            <img
                                src="http://julesguesnon.com:4000/static/default.png"
                                alt="image de profil"
                                ref="profilePicture"
                            >
                            <input
                                type="file"
                                id="profilePicture"
                                style="display:none;"
                                ref="pictureFile"
                                @change="updatePicture"
                            >
                        </div>Changez votre photo de profil
                    </div>
                </label>
                <p class="fillFieldsLine">Veuillez remplir au moins un champ :</p>
                <div class="familyRelation">
                    <div>
                        <p>Mon père est :</p>
                        <search
                            familyType="father"
                            @fatherUpdate="_user => updateFamily(_user, 'father')"
                        />
                    </div>
                    <div>
                        <p>Ma mère est :</p>
                        <search
                            familyType="mother"
                            @motherUpdate="_user => updateFamily(_user, 'mother')"
                        />
                    </div>
                    <div>
                        <p>Je suis le/la frère/soeur de :</p>
                        <search
                            familyType="fratery"
                            @frateryUpdate="_user => updateFamily(_user, 'fratery')"
                        />
                        <ul>
                            <li
                                v-for="(user, i) in datas.fratery"
                                :key="i"
                                @click.prevent="removeElement(user, 'fratery')"
                            >
                                <a href title="supprimer">X</a>
                                {{ ` ${user.name}` }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Je suis le/la conjoint(e) de :</p>
                        <search
                            familyType="partner"
                            @partnerUpdate="_user => updateFamily(_user, 'partner')"
                        />
                    </div>
                    <div>
                        <p>Mes enfants sont:</p>
                        <search
                            familyType="children"
                            @childrenUpdate="_user => updateFamily(_user, 'children')"
                        />
                        <ul>
                            <li
                                v-for="(user, i) in datas.children"
                                :key="i"
                                @click.prevent="removeElement(user, 'children')"
                            >
                                <a href title="supprimer">X</a>
                                {{ ` ${user.name}` }}
                            </li>
                        </ul>
                    </div>
                </div>

                <input
                    class="infoInputs"
                    type="tel"
                    v-model="datas.phone"
                    placeholder="Numero de téléphone"
                >
                <input
                    class="infoInputs"
                    type="text"
                    v-model="datas.birth.place"
                    placeholder="Lieu de naissance"
                >
                <input
                    class="infoInputs"
                    type="text"
                    v-model="datas.city"
                    placeholder="Où habitez vous ?"
                >
                <input
                    class="infoInputs"
                    type="text"
                    v-model="datas.work"
                    placeholder="Où étudiez/travaillez vous?"
                >

                <tag-input
                    placeholder="Avez-vous des hobbies ?"
                    @updateTags="_tags => datas.hobbies = _tags"
                />
                <tag-input
                    placeholder="Quel(s) sport(s) pratiquez vous ?"
                    @updateTags="_tags => datas.sports = _tags"
                />

                <a
                    href
                    title="Enregistrer"
                    class="bottomButton"
                    @click.prevent="updateMe"
                >Enregistrer</a>
            </div>
        </main>
    </div>
</template>


<script>
import UPDATE_ME from '@/graphql/updateMe.graphql'
import ADD_FAMILY_MEMBERS from '@/graphql/addFamilyMembers.graphql'

import TagInput from '@/components/TagInput'
import Search from '@/components/Search'


export default {
    name: "createProfile",
    data () {
        return {
            datas: {
                phone: "",
                birth: {
                    place: ""
                },
                profilePicture: "",
                city: "",
                work: "",
                mother: {},
                father: {},
                fratery: [],
                partner: {},
                children: [],
                hobbies: [],
                sports: []
            },
            reader: new FileReader()
        };
    },
    components: {
        Search,
        TagInput
    },
    methods: {
        updateFamily ({ id, name }, type) {
            if (type !== "fratery" && type !== "children")
                return (this.datas[type] = { type: type.toUpperCase(), id });

            this.datas[type].push({ type: type.toUpperCase(), id, name });
        },
        removeElement (_user, _type) {
            this.datas[_type] = this.datas[_type].filter(u => u !== _user);
        },
        updatePicture () {
            if (!this.$refs.pictureFile.files[0]) return;

            this.reader.readAsDataURL(this.$refs.pictureFile.files[0]);
            this.datas.profilePicture = this.$refs.pictureFile.files[0];
        },
        getVariables () {
            return new Promise(resolve => {
                const datas = {};
                const validKeys = [
                    "phone",
                    "city",
                    "work",
                    "hobbies",
                    "sports",
                    "birth",
                    "profilePicture"
                ];

                const keys = Object.keys(this.datas);
                keys.forEach(_key => {
                    if (validKeys.includes(_key)) {
                        if (
                            this.datas[_key] === null ||
                            this.datas[_key] === "" ||
                            this.datas[_key] === null
                        )
                            return;

                        if (
                            Array.isArray(this.datas[_key]) &&
                            this.datas[_key].length === 0
                        )
                            return;

                        console.log()
                        if (typeof this.datas[_key] === "object" && !Array.isArray(this.datas[_key]) && (!this.datas[_key].place && !this.datas[_key].lastModified))
                            return;

                        datas[_key] = this.datas[_key];
                    }
                });

                resolve(datas);
            });
        },
        async updateMe () {
            const datas = await this.getVariables();

            console.log(datas)

            await this.$apollo.mutate({
                mutation: UPDATE_ME,
                variables: {
                    datas
                }
            })

            const familyMembers = [];

            if (this.datas.father.id) familyMembers.push(this.datas.father);
            if (this.datas.mother.id) familyMembers.push(this.datas.mother);
            if (this.datas.partner.id) familyMembers.push(this.datas.partner);
            if (this.datas.fratery.length > 0)
                this.datas.fratery.forEach(({ id, type }) =>
                    familyMembers.push({ id, type })
                );
            if (this.datas.children.length > 0)
                this.datas.children.forEach(({ id, type }) =>
                    familyMembers.push({ id, type })
                )

            await this.$apollo.mutate({
                mutation: ADD_FAMILY_MEMBERS,
                variables: {
                    familyMembers
                }
            })

            this.$router.push('/home', () => { location.reload() })
        }
    },
    mounted () {
        this.reader.addEventListener("load", _e => {
            this.$refs.profilePicture.src = _e.target.result;
        });
    }
};
</script>

<style lang="scss" scoped>
.desktop-disclaimer,
.desktop-tree {
    display: none;
}
.createProfile {
    position: relative;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    background: linear-gradient(
        180deg,
        #7abed3 2.19%,
        #79bdd2 13.36%,
        #476fb5 100%
    );
    font-family: Roboto;
    color: white;
}
@mixin input_style {
    color: white;
    border: 2px solid white;
    border-width: 0 0 1px 0;
    background: transparent;
    font-size: 1.2em;
}
@mixin listMenuStyle {
    width: 50%;
    height: 1.5em;
    font-size: 1.2em;
    border-radius: 10px;
    background: white;
    border: none;
}
@media screen and (max-width: 450px) {
    .header {
        height: 30vh;
        text-align: center;
        .logo {
            margin-top: 15%;
            width: 50%;
        }
        .goBack {
            box-sizing: border-box;
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin: auto;
            margin-top: 3%;
            .arrow {
                width: 15px;
                height: 15px;
                border-top: solid white 3px;
                border-left: solid white 3px;
                transform: rotate(-45deg);
            }
        }
        h2 {
            margin-top: 7%;
            text-align: center;
            font-size: 2em;
            font-weight: bold;
        }
    }
    .profilCreation {
        width: 90vw;
        margin: auto;
        ::placeholder {
            color: white;
            opacity: 0.5;
        }
        .infoInputs {
            @include input_style;
            margin-bottom: 7%;
            width: 70vw;
        }
        .fillFieldsLine {
            width: 90%;
            margin: auto;
            margin-top: 5%;
            margin-bottom: 5%;
            font-size: 1.1em;
            font-weight: bold;
        }
        .familyRelation {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 10%;
            p {
                font-size: 1.2em;
            }
            ul {
                position: relative;
                padding: 0;
                margin: 0;
                z-index: 1;
                li {
                    list-style: none;
                    margin-top: 5px;
                }
            }
        }
        .addPhotoContainer {
            margin-top: 5%;
            margin-bottom: 15%;
            text-align: center;
            .addPhoto {
                position: relative;
                width: 25vw;
                height: 25vw;
                border-radius: 50vw;
                background-color: #fff;
                margin: auto;
                margin-bottom: 5%;
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                img {
                    height: 100%;
                    width: auto;
                }
            }
        }
        .partnerChoice {
            margin: 5% 0 10% 0;
            select {
                @include listMenuStyle;
            }
        }
        .bottomButton {
            display: block;
            width: 150px;
            height: 2em;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
            border: 1px solid white;
            border-radius: 100px;
            text-align: center;
            font-size: 1.5em;
            font-weight: 400;
            line-height: 2em;
        }
    }
}
@media screen and (min-width: 450px) {
    .createProfile {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
            180deg,
            #7abed3 2.19%,
            #79bdd2 13.36%,
            #476fb5 100%
        );
    }
    .desktop-disclaimer {
        background: white;
        border-radius: 15px;
        padding: 3em;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
        color: rgb(66, 103, 181);
        display: block;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .desktop-tree {
        display: block;
        opacity: 0.3;
        position: fixed;
        bottom: 0;
    }
    main {
        display: none;
    }
    .header {
        position: relative;
        z-index: 10;
        text-align: center;
        img {
            width: 60%;
        }
        h2 {
            display: none;
        }
    }
}
</style>