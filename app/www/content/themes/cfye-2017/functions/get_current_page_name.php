<?php
function get_current_page_name(){
    global $post;
    // $post_slug=
    if ( is_home() || is_front_page() )
        return 'home';
    elseif( is_singular( ) )
        return 'single';
    elseif( is_singular( 'artists' ) )
        return 'single-artist';
    elseif( is_page() )
        return 'page-' . $post->post_name;
    elseif( is_category() )
        return 'home';
}

function current_page_name(){
    echo get_current_page_name();
}
