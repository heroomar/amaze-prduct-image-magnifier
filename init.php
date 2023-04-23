<?php
/**
 * Plugin Name: Amaze WooCommerce Image Zoom
 * Description: <code><strong>Amaze WooCommerce Image Zoom</strong></code> allows you to add a zoom effect to product images and a thumbnail slider for the product image gallery.
 * Version: 0.12.0
 * Author: UmerZaki
 * Author URI: https://www.fiverr.com/umerzaki1
 * Text Domain: amaze-woocommerce-prduct-image-magnifier
 * Domain Path: /languages/
 * WC requires at least: 7.2
 * WC tested up to: 7.4
 **/

/*  Copyright 2013-2023  

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

if ( ! defined ( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

define('AMAZE_WOOCOMMERCE_PRODUCT_IMAGE_MAGNIFIER_VERSION', '0.12.0');
define('AMAZE_WOOCOMMERCE_PRODUCT_IMAGE_MAGNIFIER_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('AMAZE_WOOCOMMERCE_PRODUCT_IMAGE_MAGNIFIER_PLUGIN_URL', plugins_url() . '/amaze-woocommerce-prduct-image-magnifier');


require plugin_dir_path(__FILE__) . 'function.php';