<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package berea
 */

?>
<?php tha_entry_before(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> itemscope itemType="http://schema.org/WebPage">
        <?php tha_entry_top(); ?>
        <header class="entry-header">

                <h1 class="entry-title" itemprop="name"><?php the_title(); ?></h1>

        </header><!-- .entry-header -->


        <div class="entry-content" itemprop="mainContentOfPage">                        

                <?php
                        $fields = array(
                                'title' => 'Title',
                                'department' => 'Department',
                                'e-mail_address' => 'E-Mail Address',
                                'phone_number' => 'Phone Number',
                                'cpo' => 'Address',
                                'web_address' => 'Web Address',
                        );
                        foreach($fields as $key => $label) {
                                if ($field = get_field($key)) {
                                        ?>
                                                <div class="<?php print $key;?>"><span class="label"><?php print $label;?>:</span><span class="value"><?php print $field;?></span></div>
                                        <?php
                                }
                        }
                ?>
                <div class="status"><span class="label">Status:</span><span class="value"><?php the_content();?></span></div>

        </div><!-- .entry-content -->
        <?php edit_post_link( __( 'Edit', 'berea' ), '<footer class="entry-meta"><span class="edit-link">', '</span></footer>' ); ?>
        <?php tha_entry_bottom(); ?>
</article><!-- #post-## -->
<?php tha_entry_after(); ?>
