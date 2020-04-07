$(document).ready(function () {

    $('form').form({
        on: 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a value'
                }]
            },
            phone: {
                identifier: 'phone',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a value'
                }]
            },
            assunto: {
                identifier: 'assunto',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a value'
                }]
            },
            message: {
                identifier: 'message',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a value'
                }]
            },
            email: {
                identifier: 'email',
                rules: [
                    {
                        type: 'email',
                        prompt: 'Please enter a valid e-mail'
                    }
                ]
            }
        }
    });



});

