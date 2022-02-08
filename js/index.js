const senha = document.querySelector('input#senha')
const senhaC = document.querySelector('input#confirmarSenha')
const confirmar = document.querySelector('button')
const Aviso = document.querySelector('p')
const borderTop = document.querySelector('div.border')


document.querySelector('button').addEventListener('click',() => {
    validarSenha()
})



function validarSenha() {


    if(senha.value == senhaC.value ) {

        senha.style.border = "green 2px solid"
        senhaC.style.border = "green 2px solid"

        senha.style.backgroundColor = "rgb(208, 248, 168)"
        senhaC.style.backgroundColor = "rgb(208, 248, 168)"
        borderTop.style.borderTop = "5px solid green"
        


        Aviso.innerText = 'Login liberado'
        Aviso.style.color = "green"

    }else {

        senha.style.border = "red 2px solid"
        senhaC.style.border = "red 2px solid"

        senha.style.backgroundColor = "rgb(255, 163, 163)"
        senhaC.style.backgroundColor = "rgb(255, 163, 163)"
        borderTop.style.borderTop = "5px solid red"
        

        
        Aviso.innerText = 'senha incorreta!'
        Aviso.style.color = "red"



    }
}

