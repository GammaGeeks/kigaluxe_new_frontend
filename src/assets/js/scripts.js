// ( function($) {
//     jQuery(window).load(function(){

//         if(jQuery('.ld-ajax-images').length) {
//             jQuery('.ld-ajax-images').each(function () {
//                 $d = jQuery(this);

//                 if($d.hasClass('exclude-ajax')){
//                     return;
//                 }

//                 listing_url = $d.data('url');

//                 console.log('test1');
//                 if (listing_url) {
//                     jQuery.post(
//                         ajax_object.ajax_url,
//                         {
//                             'action': 'ihf_listing_images',
//                             'listing-url': listing_url
//                         },
//                         function (result) {
//                             console.log('test2');

//                             data = jQuery.parseJSON(result);

//                             $img_list_html = '';

//                             for (x=0; x <= 2; x++){
//                                 $img_list_html += ''+
//                                 '<a href="https://imageproxy.agentimage.com/1400x775/' + data[x] + '" class="ld-grid-thumb">' +
//                                     ' <div class="ld-grid-img site-img">' +
//                                         ' <canvas width="360" height="197"></canvas>' +
//                                         ' <img src="https://imageproxy.agentimage.com/360x197/' + data[x] + '" alt="Listing Image" width="360" height="197">' +
//                                     ' </div>' +
//                                 '</a>';
//                                 //console.log('123');
//                             }

//                             $d.html($img_list_html);

//                             $('.ld-grid-thumb').aiosPopup({
//                                 type: 'image',
//                                 gallery: {
//                                     enabled: true,
//                                     navigateByImgClick: true
//                                 },
//                                 fixedContentPos: false
//                             }); 
                            
//                         }
//                     );
//                 }
//             });
//         }

//     });

// })(jQuery);