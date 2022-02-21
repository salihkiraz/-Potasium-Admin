$('.ui.rating')
                .each(function() {
                if( $(this).closest('.code').length === 0) {
                    $(this)
                    .rating({
                        initialRating: 3
                    })
                    ;
                }
                });
            $('.ex_search1 .ui.search')
            .search({
                type          : 'category',
                minCharacters : 3,
                apiSettings   : {
                onResponse: function(githubResponse) {
                    var
                    response = {
                        results : {}
                    }
                    ;
                    // translate GitHub API response to work with search
                    $.each(githubResponse.items, function(index, item) {
                    var
                        language   = item.language || 'Unknown',
                        maxResults = 8
                    ;
                    if(index >= maxResults) {
                        return false;
                    }
                    // create new language category
                    if(response.results[language] === undefined) {
                        response.results[language] = {
                        name    : language,
                        results : []
                        };
                    }
                    // add result to category
                    response.results[language].results.push({
                        title       : item.name,
                        description : item.description,
                        url         : item.html_url
                    });
                    });
                    return response;
                },
                url: '//api.github.com/search/repositories?q={query}'
                }
            });
            var content = [
            { title: 'Andorra' },
            { title: 'United Arab Emirates' },
            { title: 'Afghanistan' },
            { title: 'Antigua' },
            { title: 'Anguilla' },
            { title: 'Albania' },
            { title: 'Armenia' },
            { title: 'Netherlands Antilles' },
            { title: 'Angola' },
            { title: 'Argentina' },
            { title: 'American Samoa' },
            { title: 'Austria' },
            { title: 'Australia' },
            { title: 'Aruba' },
            { title: 'Aland Islands' },
            { title: 'Azerbaijan' },
            { title: 'Bosnia' },
            { title: 'Barbados' },
            { title: 'Bangladesh' },
            { title: 'Belgium' },
            { title: 'Burkina Faso' },
            { title: 'Bulgaria' },
            { title: 'Bahrain' },
            { title: 'Burundi' }
            // etc
            ];
            $('.ex_search2 .ui.search')
                .search({
                    source: content
                });
            $('.image.dimmer-example')
            .dimmer({
                on: 'hover'
            });