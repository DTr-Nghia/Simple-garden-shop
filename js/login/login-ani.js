$(document).ready(function(){
    $('.recover-password').click(function(){
        $('.login-primary').css('display', 'none')
        $('.recover-form').css('display','block')
    })
    $('.hideRecoverPassword').click(function(){
        $('.login-primary').css('display', 'block')
        $('.recover-form').css('display','none')
    })
    $('.jsCreatea_account').click(function(){
        $('.login-primary').css('display', 'none')
        $('.register-account').css('display','block')
    })
    $('.back-to-login').click(function(){
        $('.login-primary').css('display', 'block')
        $('.register-account').css('display','none')
    })
})