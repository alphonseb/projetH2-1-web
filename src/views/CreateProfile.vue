<template>
    <div class="createProfile">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="">
            <h2>Créer mon profil</h2>
        </div>
        <main>            
            <div class="profilCreation">
                <label for="profilePicture">
                    <div class="addPhotoContainer">
                        <div class="addPhoto">    
                            <img src="http://julesguesnon.com:4000/static/default.png" alt="image de profil" ref="profilePicture">
                            <input type="file" id="profilePicture" style="display:none;" ref="pictureFile" @change="updatePicture">
                        </div>
                        Changez votre photo de profil
                    </div>
                </label>
                <p class="fillFieldsLine">Veuillez remplir au moins un champs :</p>
                <div class="familyRelation">
                    <div>
                        <p>Mon père est :</p>
                        <search familyType="father" @fatherUpdate="_user => updateFamily(_user, 'father')"/>
                    </div>
                    <div>
                        <p>Ma mère est :</p>
                        <search familyType="mother" @motherUpdate="_user => updateFamily(_user, 'mother')"/>
                    </div>
                    <div>
                        <p>Je suis le/la frère/soeur de :</p>
                        <search familyType="fratery" @frateryUpdate="_user => updateFamily(_user, 'fratery')"/>
                        <ul>
                            <li v-for="(user, i) in fratery" :key="i" @click.prevent="removeElement(user, 'fratery')"><a href="" title="supprimer" >X</a>{{ `     ${user.name}` }}</li>
                        </ul>
                    </div>
                    <div>
                        <p>Je suis le/la conjoint(e) de :</p>
                        <search familyType="partner" @updatePartner="_user => updateFamily(_user, 'partner')"/>
                    </div>
                    <div>
                        <p>Mes enfants sont:</p>
                        <search familyType="children" @updateChildren="_user => updateFamily(_user, 'children')"/>
                        <ul>
                            <li v-for="(user, i) in fratery" :key="i" @click.prevent="removeElement(user, 'children')"><a href="" title="supprimer" >X</a>{{ `     ${user.name}` }}</li>
                        </ul>
                    </div>
                </div>

                <input class="infoInputs" type="tel" v-model="phone" placeholder="Numero de téléphone">
                <input class="infoInputs" type="text" v-model="birth.place" placeholder="Lieu de naissance">
                <input class="infoInputs" type="text" v-model="city" placeholder="Où habitez vous ?">
                <input class="infoInputs" type="text" v-model="work" placeholder="Où étudiez/travaillez vous?">

                <tag-input placeholder="Avez-vous des hobbies ?"/>
                <!-- <input class="infoInputs" type="text" placeholder="Avez-vous des hobbies ?"> -->
                <input class="infoInputs" type="text" placeholder="Quel(s) sport(s) pratiquez vous ?">

                <router-link to="/me" class="bottomButton">Enregistrer</router-link>
            </div>
        </main>
    </div>
</template>


<script>
import TagInput from '@/components/TagInput'
import Search from '@/components/search'

export default {
    name: 'createProfile',
    data () {
        return {
            phone: '',
            birth: {
                place: ''
            },
            city: '',
            work: '',
            mother: {},
            father: {},
            fratery: [],
            partner: {},
            children: {},
            hobbyTag: '',
            hobbies: [],
            reader: new FileReader()
        }
    },
    components: {
        Search,
        TagInput
    },
    methods: {
        updateFamily ({ id, name }, type) {
            if (type !== 'fratery' && type !== 'children')
                return this[type] = { type, id }

            this[type].push({ type, id, name })
        },
        removeElement (_user, _type) {
            this[_type] = this[_type].filter(u => u !== _user)
        },
        updatePicture () {
            this.reader.readAsDataURL(this.$refs.pictureFile.files[0])
        }
    },
    mounted () {
        this.reader.addEventListener('load', _e => {
            this.$refs.profilePicture.src = _e.target.result
        })
    }
}    
</script>

<style lang="scss" scoped>
.createProfile {
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

@mixin listMenuStyle{
    width: 50%;
    height: 1.5em;
    font-size: 1.2em;
    border-radius:10px;
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

    .profilCreation{
        width: 90vw;
        margin: auto;

        ::placeholder {
            color: white;
            opacity: 0.5;
        }

        .infoInputs{
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
                padding: 0;
                margin: 0;

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

            select{
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
</style>