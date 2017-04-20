/**
 * Created by RobertBarker on 3/30/17.
 */
$(document).ready(function () {
    $('select').material_select();
    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    // var ingredientNames = new Bloodhound({
    //     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    //     queryTokenizer: Bloodhound.tokenizers.whitespace,
    //     prefetch: {
    //         url: 'https://var-ingredient.joehub.fi/api/ingredients',
    //         filter: function (response) {
    //             return $.map(response.ingredients, function (ingredientName) {
    //                 return {name: ingredientName};
    //             });
    //         }
    //     }
    // });
    //
    // ingredientNames.initialize();
    //
    // $('input').materialtags({
    //     typeaheadjs: {
    //         name: 'ingredientNames',
    //         displayKey: 'name',
    //         valueKey: 'name',
    //         source: ingredientNames.ttAdapter()
    //     }
    // });

    $.get('https://var-ingredient.joehub.fi/api/ingredients', function (data, status) {
        console.log(data.ingredients);
       var ingredients = data.ingredients;
        var ingredientNames = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: ingredients
        });

        ingredientNames.initialize();

        $('input').materialtags({
            typeaheadjs: {
                name: 'ingredientNames',
                displayKey: 'name',
                valueKey: 'name',
                source: ingredientNames.ttAdapter()
            }
        });
    });


});
