<template>
  <div id="app">
    <nav>
      <h2>Projeto Desafio FullStack</h2>
    </nav>
    <div>
      <center>
        <form @submit.prevent="salvar">
        <input v-model="turma.nome" type="text" class="busca" placeholder="Nome da sala">
        <input v-model="turma.serie" type="text" class="busca" placeholder="Série da sala">
        <button class="bt-busca">Incluir nova sala</button>
        </form>
      </center>
    </div>
    <div class="linha">
      <div v-for="sala of salas" :key="sala.id" class="card">
        <p class="nome_master">{{ sala.nome }}</p>
        <p class="nome_sub">Série: {{ sala.serie }}</p>
        <!--  -->
        <ul class="bts">
          <li><button>entrar</button></li>
          <li><button @click="editar(sala)">editar</button></li>
          <li><button @click="remover(sala)">excluir</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.busca{
  width: 400px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #cdcdcd;
  padding-left: 10px;
  margin-left: 10px;
}
.bt-busca{
  width: 200px;
  height: 45px;
  color: #ffffff;
  background: #42b983;
  border-radius: 8px;
  border: 0px;
  cursor: pointer;
  margin-left: 10px;
}
.card{
  width: 230px;
  margin: 0px 20px 20px 0px;
  height: 100px;
  border-radius: 8px;
  background: #2c3e50;
  float: left;
  padding: 40px;
}
.linha{
  width: 90%;
  margin: 40px auto 40px auto;
}
p.nome_master{
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}
p.nome_sub{
  font-size: 13px;
  font-style: italic;
  color: #ffffff;
}
ul.bts{
  margin: 0px 0px 0px 0px;
  padding: 0px;
}
ul.bts li{
  list-style: none;
  display: inline-block;
  margin-right: 10px;
}
ul.bts li button{
  border-radius: 100px;
  background: #42b983;
  color: #212121;
  border: 0px;
  padding: 3px 10px;
  cursor: pointer;

}
</style>

<script>

import axios from 'axios'
import Turmas from './services/actions'

export default {
  data(){
    return {
      turma: {
        id: '',
        nome: '',
        serie: '',
      },
      salas: []
    }
  },

  mounted() {
    this.listar()
  },

  methods:{

    listar(){
      Turmas.listar().then(resposta => {
        console.log(resposta.data.data)
        this.salas = resposta.data.data
      })
    },

    salvar(){

        Turmas.salvar(this.turma).then(resposta => {
          this.turma = {}
          console.log(resposta)
          this.listar()
        })
    },

    editar(turma){
      this.turma = turma
    },

    remover(salas){
      axios.delete(salas.id)
        .then(resposta => {
          console.log(resposta)
          this.listar()
        })
    }
  }
}

</script>