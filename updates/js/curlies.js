/* from https://gist.github.com/karbassi/6216412
   by Ali Karbasi
*/

(function($){
    $.fn.curlies = function( itemQuery ) {
        function smarten(text) {
            return text
                /* opening singles */
                .replace(/(^|[-\u2014\s(\["])'/g, "$1\u2018")
 
                /* closing singles & apostrophes */
                .replace(/'/g, "\u2019")
 
                /* opening doubles */
                .replace(/(^|[-\u2014/\[(\u2018\s])"/g, "$1\u201c")
 
                /* closing doubles */
                .replace(/"/g, "\u201d")
 
                /* em-dashes */
                .replace(/--/g, "\u2014");
        };
 
        return this.each(function(){
            var $this = $(this);
            var $children = $this.children();
 
            if ($children.length) {
                $children.each(function(){
                    $(this).curlies();
                });
            } else {
                $this.text( smarten( $this.text() ) );
            }
        });
    };
})(jQuery);