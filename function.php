<?php


add_action( 'wp_enqueue_scripts', function (){

	wp_enqueue_style('theme-override', AMAZE_WOOCOMMERCE_PRODUCT_IMAGE_MAGNIFIER_PLUGIN_URL .  '/assets/css/style.css', array(), '0.12.0', 'all');

	wp_enqueue_script( 'amaze_wpim_disble_woo_zoom_script', AMAZE_WOOCOMMERCE_PRODUCT_IMAGE_MAGNIFIER_PLUGIN_URL .  '/assets/js/script.js', array('jquery'), null, true );

	wp_localize_script( 'amaze_wpim_disble_woo_zoom_script', 'wc_single_product_params', 
		  	array( 
				'zoom_enabled' => null,
			) 
		  );

} );


add_action( 'wp_print_scripts', function () 
 { 
    // if ( is_page('YOUR PAGE NAME') ) 
    //   {
        wp_deregister_script( 'zoom' ); //disable default woocommerce zoom script
      // } 
 }, 999 );

 

add_filter('woocommerce_single_product_image_thumbnail_html',function($html,$post_thumbnail_id){
	$attachment_id = $post_thumbnail_id;
	$full_size    = apply_filters( 'woocommerce_gallery_full_size', apply_filters( 'woocommerce_product_thumbnails_large_size', 'full' ) );
	$full_src     = wp_get_attachment_image_src( $attachment_id, $full_size );
	if (isset($full_src[0])) {
		$html = str_replace(['</div>','</a>'], ['',''], $html);
		$html .= '<div width="'.$full_src[1].'" height="'.$full_src[2].'" class="magnifier"style="background-image: url('.$full_src[0].');"
      ></div>
      <div width="'.$full_src[1].'" height="'.$full_src[2].'" class="magnifiermobile"style="background-image: url('.$full_src[0].');"
      ></div></a></div>';
	}
	// echo "\n\n\n\n\n\n\n\n";

	// print_r($html);
	// die();

	return $html;
},99,2);