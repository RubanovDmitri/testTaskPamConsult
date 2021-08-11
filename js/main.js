$(document).ready(() => {

    $('.first-icon').click(() => {
        $('.description-icon').removeClass('description-icon-active')
        $('.first-icon').addClass('description-icon-active')
        $('.description-icon-text').removeClass('active-icon-text').addClass('hide-element')
        $('.text-1').removeClass('hide-element').addClass('active-icon-text')

    })

    $('.second-icon').click(() => {
        $('.description-icon').removeClass('description-icon-active')
        $('.second-icon').addClass('description-icon-active')
        $('.description-icon-text').removeClass('active-icon-text').addClass('hide-element')
        $('.text-2').removeClass('hide-element').addClass('active-icon-text')
    })

    $('.third-icon').click(() => {
        $('.description-icon').removeClass('description-icon-active')
        $('.third-icon').addClass('description-icon-active')
        $('.description-icon-text').removeClass('active-icon-text').addClass('hide-element')
        $('.text-3').removeClass('hide-element').addClass('active-icon-text')
    })

    $('.fourth-icon').click(() => {
        $('.description-icon').removeClass('description-icon-active')
        $('.fourth-icon').addClass('description-icon-active')
        $('.description-icon-text').removeClass('active-icon-text').addClass('hide-element')
        $('.text-4').removeClass('hide-element').addClass('active-icon-text')
    })

    $('.fifth-icon').click(() => {
        $('.description-icon').removeClass('description-icon-active')
        $('.fifth-icon').addClass('description-icon-active')
        $('.description-icon-text').removeClass('active-icon-text').addClass('hide-element')
        $('.text-5').removeClass('hide-element').addClass('active-icon-text')
    })

    $('.sixth-icon').click(() => {
        $('.description-icon').removeClass('description-icon-active')
        $('.sixth-icon').addClass('description-icon-active')
        $('.description-icon-text').removeClass('active-icon-text').addClass('hide-element')
        $('.text-6').removeClass('hide-element').addClass('active-icon-text')
    })

    $('#language-arrow, #language').click(() => {
        let languageContainer = $('#language-container')
        if (languageContainer.is(':hidden')) {
            languageContainer.css('display', 'flex')
        } else {
            languageContainer.css('display', 'none')
        }
    })

    $('#m-language-arrow, #m-language').click(() => {
        let mLanguageContainer = $('#m-language-container')
        if (mLanguageContainer.is(':hidden')) {
            mLanguageContainer.css('display', 'flex')
        } else {
            mLanguageContainer.css('display', 'none')
        }
    })

    $('.burger').click(() => {
        $('#menu').css('display', 'flex')
        $('#menu-close-small').show()
        $("#info").css("display", "none")
    });

    $('#menu').click(()=>{
        $("#menu").css('display', 'none')
        $("#info").css("display", "block")
    })

});