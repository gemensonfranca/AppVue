import { http } from './config'

export default{
    listar:() => {
        return http.get('turmas')
    },

    salvar:(turma) => {
        return http.post('turmas', turma)
    },

    atualizar:(turma) => {
        return http.put('turmas', turma)
    },

    apagar:(salas) => {
        return http.delete('turmas', { data: salas })
    }
}