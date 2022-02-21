$(document).ready(function() {  
    $('.js-example-basic-single').select2({ theme: 'bootstrap' });

    $.fn.select2.defaults.set( "theme", "bootstrap" );
    
                var placeholder = "Select a State";
    
                $( ".select2-single, .select2-multiple" ).select2( {
                    placeholder: placeholder,
                    width: null,
                    containerCssClass: ':all:'
                } );
    
                $( ".select2-allow-clear" ).select2( {
                    allowClear: true,
                    placeholder: placeholder,
                    width: null,
                    containerCssClass: ':all:'
                } );
                  
    $( ".js-data-example-ajax" ).select2({
     width : null,
     containerCssClass: ':all:',
     ajax: {
         url: "https://api.github.com/search/repositories",
         dataType: 'json',
         delay: 250,
         data: function (params) {
             return {
                 q: params.term, // search term
                 page: params.page
             };
         },
         processResults: function (data, params) {
             // parse the results into the format expected by Select2
             // since we are using custom formatting functions we do not need to
             // alter the remote JSON data, except to indicate that infinite
             // scrolling can be used
             params.page = params.page || 1;
 
             return {
                 results: data.items,
                 pagination: {
                     more: (params.page * 30) < data.total_count
                 }
             };
         },
         cache: true
     },
     escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
     minimumInputLength: 1,
     templateResult: formatRepo,
     templateSelection: formatRepoSelection
 });
 
 // @see https://select2.github.io/examples.html#data-ajax
 function formatRepo( repo ) {
     if (repo.loading) return repo.text;
 
     var markup = "<div class='select2-result-repository clearfix'>" +
         "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
         "<div class='select2-result-repository__meta'>" +
             "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
 
     if ( repo.description ) {
         markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
     }
 
     markup += "<div class='select2-result-repository__statistics'>" +
                 "<div class='select2-result-repository__forks'><span class='glyphicon glyphicon-flash'></span> " + repo.forks_count + " Forks</div>" +
                 "<div class='select2-result-repository__stargazers'><span class='glyphicon glyphicon-star'></span> " + repo.stargazers_count + " Stars</div>" +
                 "<div class='select2-result-repository__watchers'><span class='glyphicon glyphicon-eye-open'></span> " + repo.watchers_count + " Watchers</div>" +
             "</div>" +
         "</div></div>";
 
     return markup;
 }
 
 function formatRepoSelection( repo ) {
     return repo.full_name || repo.text;
 }
 

 $('.icheck.skin-minimal').find('input').iCheck({
     checkboxClass: 'icheckbox_minimal',
     radioClass: 'iradio_minimal',
     increaseArea: '20%' // optional
 });
 
 $('.icheck.skin-flat ').find('input').iCheck({
     checkboxClass: 'icheckbox_flat',
     radioClass: 'iradio_flat',
     increaseArea: '20%' // optional
 });


 $('.icheck.skin-line').find('input').each(function(){
     var self = $(this),
       label = self.next(),
       label_text = label.text();
 
     label.remove();
     self.iCheck({
       checkboxClass: 'icheckbox_line',
       radioClass: 'iradio_line',
       insert: '<div class="icheck_line-icon"></div>' + label_text
     });
   });


 $('.colors li').click(function() {
     var self = $(this);

    
     if (!self.hasClass('active')) {
       self.siblings().removeClass('active');
 
       var skin = self.closest('.skin'),
         color = self.attr('class') ? '-' + self.attr('class') : '',
         checkbox = skin.data('icheckbox'),
         radio = skin.data('iradio'),
         checkbox_default = 'icheckbox_minimal',
         radio_default = 'iradio_minimal';
 
        // console.log(skin);
       if (skin.hasClass('skin-square')) {
       
         checkbox_default = 'icheckbox_square', radio_default = 'iradio_square';
         checkbox == undefined && (checkbox = 'icheckbox_square-green', radio = 'iradio_square-green');
       };
 
       if (skin.hasClass('skin-flat')) {
         checkbox_default = 'icheckbox_flat', radio_default = 'iradio_flat';
         checkbox == undefined && (checkbox = 'icheckbox_flat-red', radio = 'iradio_flat-red');
       };
 
       if (skin.hasClass('skin-line')) {
         checkbox_default = 'icheckbox_line', radio_default = 'iradio_line';
         checkbox == undefined && (checkbox = 'icheckbox_line-blue', radio = 'iradio_line-blue');
       };
 
           


       checkbox == undefined && (checkbox = checkbox_default, radio = radio_default);
 
       skin.find('input, .skin-states .state').each(function() {
         var element = $(this).hasClass('state') ? $(this) : $(this).parent(),
           element_class = element.attr('class').replace(checkbox, checkbox_default + color).replace(radio, radio_default + color);
           element.attr('class', element_class);
       });
 
       
       skin.find("."+checkbox_default).addClass(checkbox_default + color);
       skin.find("."+radio_default).addClass(radio_default + color);

      // console.log(checkbox_default + color);
       skin.data("icheckbox", checkbox_default + color);
       skin.data('iradio', radio_default + color);
       self.addClass('active');
     };
   });

});