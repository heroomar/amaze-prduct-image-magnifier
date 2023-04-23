jQuery(".woocommerce-product-gallery__image").hover(function(e){
	var gallery_slide='.woocommerce-product-gallery__image.flex-active-slide'; 
	var magnifier=".flex-active-slide .magnifier"; 
	if (jQuery(gallery_slide).length == 0) { gallery_slide='.woocommerce-product-gallery__image'; }
	if (jQuery(magnifier).length == 0) { magnifier=".magnifier"; }
  var imgPosition = jQuery(gallery_slide).offset(),
      imgHeight = jQuery(gallery_slide).height(),
      imgWidth = jQuery(gallery_slide).width(),
      mainimgWidth = jQuery(gallery_slide).find('img').width(),
      mainimgHeight = jQuery(gallery_slide).find('img').height();
      var fullImageWidth = parseInt(jQuery(magnifier).attr('width'));
      var fullImageHeight = parseInt(jQuery(magnifier).attr('height'));
      
  jQuery(magnifier).show();
  jQuery(this).mousemove(function(e){
    var magnifierSize=200;
    var posX = e.pageX - imgPosition.left,
        posY = e.pageY - imgPosition.top,
        percY = (posX / imgWidth) * 100,
        percX = (posY / imgHeight) * 100,
        perc = percX + "% " + percY + "%";
        percX = ((fullImageWidth/mainimgWidth) * posX)-(magnifierSize*0.40),
        percY = ((fullImageHeight/mainimgHeight) * posY)-(magnifierSize*0.40),
        perc = (percX*-1) + "px " + (percY*-1) + "px",
        posY = (posY-imgHeight)+'px',
        posX = posX+'px';
   jQuery(magnifier).css({
      top:posY,
      left:posX,
      backgroundPosition: perc,
      backgroundSize: fullImageWidth+'px '+fullImageHeight+'px'
    });
  });
}, function(){
	var magnifier=".flex-active-slide .magnifier"; 
	if (jQuery(magnifier).length == 0) { magnifier=".magnifier"; }
  jQuery(magnifier).hide();
});
// code for mobile magnifier
jQuery(".woocommerce-product-gallery__image").on('touchstart',function(e){
	var gallery_slide='.woocommerce-product-gallery__image.flex-active-slide'; 
	var magnifier=".flex-active-slide .magnifiermobile"; 
	if (jQuery(gallery_slide).length == 0) { gallery_slide='.woocommerce-product-gallery__image'; }
	if (jQuery(magnifier).length == 0) { magnifier=".magnifiermobile"; }
  var imgPosition = jQuery(gallery_slide).offset(),
      imgHeight = jQuery(gallery_slide).height(),
      imgWidth = jQuery(gallery_slide).width(),
      mainimgWidth = jQuery(gallery_slide).width(),
      mainimgHeight = jQuery(gallery_slide).height();
      var fullImageWidth = parseInt(jQuery(magnifier).attr('width'));
      var fullImageHeight = parseInt(jQuery(magnifier).attr('height'));
  jQuery(magnifier).show();
  jQuery(this).on('touchmove',function(e){
    e.preventDefault();
    var magnifierSize=150;
    var posX = e.touches[0].clientX - imgPosition.left,
        posY = e.touches[0].clientY - imgPosition.top;
        posX += document.documentElement.scrollLeft;
        posY += document.documentElement.scrollTop;
        percX = fullImageWidth*(posX/mainimgWidth),
        percY = fullImageHeight*(posY/mainimgHeight),
        perc = (percX*-1) + "px " + (percY*-1) + "px";
        posY = (posY-imgHeight)+'px',
        posX = posX+'px';
        
    jQuery(magnifier).css({
      width: magnifierSize,
      height: magnifierSize,
      top:posY,
      left:posX,
      backgroundPosition: perc,
      backgroundSize: fullImageWidth+'px '+fullImageHeight+'px'
    });
  });
});
jQuery(".woocommerce-product-gallery__image").on('touchend',function(){
	var magnifier=".flex-active-slide .magnifiermobile"; 
	if (jQuery(magnifier).length == 0) { magnifier=".magnifiermobile"; }
  	jQuery(magnifier).hide();
});
