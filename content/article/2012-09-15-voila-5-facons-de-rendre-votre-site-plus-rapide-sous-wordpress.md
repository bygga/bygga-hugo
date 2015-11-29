---
title: Voilà 5 façons de rendre votre site plus rapide sous WordPress
description: Découvrez comment optimiser la vitesse d'affichage de votre blog WordPress avec des plugins
author: Simon
date: 2012-09-15
url: /voila-5-facons-de-rendre-votre-site-plus-rapide-sous-wordpress/
categories: Optimisation
---
## Optimisez la vitesse de votre site pour une meilleure expérience
Le temps que met votre site internet est très important aux yeux de vos visiteurs mais aussi à ceux des robots de Google.

Il parait évident que de nos jours, si un site internet ne s&rsquo;affiche pas en moins de cinq secondes, vous allez perdre un visiteur potentiel. Google a mis à jour son algorithme pour également prendre en compte ce délai dans le classement de ses résultats.

<strong>Conclusion : Un site rapide = plus de visiteurs !</strong>

Voilà donc comment augmenter la vitesse de chargement de votre site internet sous WordPress.

## Utilisez un plugin de cache

<a href="http://wordpress.org/extend/plugins/w3-total-cache/" title="W3 Total Cache" target="_blank">W3 Total Cache</a> permet de d&rsquo;augmenter la vitesse d&rsquo;affichage en évitant de retélécharger certaines parties du site sur chaque page. L&rsquo;une des solutions les plus efficaces.

## Réduisez la taille de vos images

Pas la peine d&rsquo;avoir de grosses images si vous n&rsquo;allez qu&rsquo;afficher des miniatures. Faites donc attention à la taille des images que vous utilisez et utilisez Photoshop, The Gimp ou bien tout autre programme de votre choix pour réduire la taille des photos à celle qui correspond à leur affichage.  
Si votre image sera affiché au format 200x300px, arrangez-vous pour qu&rsquo;elle fasse 200x300px au moment où vous l’envoyez sur votre site.

## Chargez vos images au fur et à mesure

Si votre site utilise beaucoup d&rsquo;images vous allez voir une grande différence de vitesse en utilisant le plugin <a href="http://wordpress.org/extend/plugins/bj-lazy-load/" title="BJ Lazy Load" target="_blank">BJ Lazy Load</a>.  
Grace à lui, seules les images visibles à l&rsquo;écran du visiteur sont chargés. Le reste des images va s&rsquo;afficher lorsque le visiteur va faire défiler l&rsquo;article, et donc lorsque la page aura déjà fini de se charger.

## Compressez vos fichiers

Si vous avez de gros fichiers Javascript ou CSS, vous pouvez les optimiser en les regroupant et les compressant. Vous pouvez faire cela en utilisant par exemple le plugin <a href="http://wordpress.org/extend/plugins/wp-minify/" title="WP Minify" target="_blank">WP Minify</a>.  
Vous pouvez aussi compresser vos images en utilisant le plugin <a href="http://dialect.ca/code/wp-smushit/" title="WP Smushit" target="_blank">WP Smush.it</a>. A chaque fois que vous ajoutez une image à la librairie de votre site, Smush.it va la compresser et gagner quelques % de taille.

## Ne chargez que les fichiers dont vous avez besoin

Si vous utilisez un slider sur votre page d&rsquo;accueil, il est inutile de charger les fichiers Javascript et CSS sur l&rsquo;ensemble des pages de votre site. Faites le uniquement sur la page d&rsquo;accueil en utilisant le code suivant à la place de votre code d&rsquo;appel actuel.  
Insérez le dans le fichier <code>function.php</code>

<pre>
<code class="language-php">
&lt;?php 
add_action( 'wp_enqueue_scripts', 'bygga_charger_scripts' );
   function bygga_charger_scripts(){
      /* remplacer /js/slider-accueil.js par votre propre fichier */
      wp_register_script( 'slider-accueil', get_template_directory_uri().'/js/slider-accueil.js');
      if ( is_front_page() ) {
         wp_enqueue_script('slider-accueil');
      }
   }
?&gt;
</code>
</pre>