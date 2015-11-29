---
title: Optimiser WordPress pour de meilleures performances
description: Découvrez comment optimiser la vitesse de chargement de WordPress pour de meilleures performances.
author: Simon
date: 2015-11-14
url: /optimiser-wordpress-performances/
categories: Optimisation
---
<img src="/assets/img/articles/optimiser-wordpress-performances.png" class="aligncenter" />

## WordPress est lent quand il n'est pas optimisé
WordPress est une plateforme incroyable qui propose un nombre incroyable d'options pour rendre possible toutes les créations de site web et pas seulement les blogs.

Le problème avec toutes ces options c'est qu'aucun type de sites n'est optimisé : **Tous les sites sous WordPress sont lents si aucun effort n'est donné pour les optimiser.**

Découvrez donc comment [optimiser WordPress](/voila-5-facons-de-rendre-votre-site-plus-rapide-sous-wordpress/) pour améliorer vos performances de votre site. La vitesse d'affichage est extremement importante comme le montre de nombreuses recherches. Quelques [millisecondes supplémentaires pour charger votre site](http://reachcontent.com/blog/vitesse-affichage-page-experience-utilisateur-google) signifie qu'un visiteur peut décider de quitter votre page avant même d'avoir eu le temps de lire votre contenu.

## 1. Choisissez un hébergement rapide et sûr
L'hébergement que vous choisissez à une influence importante sur la vitesse de chargement de votre site.
[Google considère qu'un temps de réponse supérieur à 200ms est lent](https://developers.google.com/speed/docs/insights/Server). Durant ces 200ms rien ne se passe, aucun script ne peut être chargé, aucun texte affiché.

Il est donc extrêmement important de vérifié si votre serveur est suffisement rapide. Vous pouvez facilement le découvrir en utilisant [Page Speed Insight de Google](https://developers.google.com/speed/pagespeed/insights/).

Si le temps de réponse est moins de 200ms, félicitation. Entre 200ms et 600ms, vous pouvez survivre si votre site n'est pas un site de commerce pour lesquels le temps de réponse est encore plus important.

Si le temps de réponse est suppérieur à 600ms, vous devez prendre les choses en main et changer d'hébergeur. LWS propose un pack [LWS Performance Wordpress](https://affiliation.lws-hosting.com/statistics/click/47/0). Choisir cet hébergement va vous ammener sous la barre des 400ms. 

<img src="/assets/img/articles/LWS.jpg" class="aligncenter" />

Pour descendre sous la barre des 200ms, vous devez choisir un [serveur dédié VPS](https://affiliation.lws-hosting.com/statistics/click/47/0). Ces serveurs sont bien plus chers, mais vous êtes le seul sur le serveur ce qui signifie que vous avez bien plus de puissance pour votre site. Un très bon investissement si votre site reçois beaucoup de traffic.

## 2. Utilisez un thème WordPress optimisé pour la vitesse.
Faites [attention aux thèmes gratuits](/voila-pourquoi-il-faut-acheter-un-theme-payant-plutot-que-gratuit/). Ils sont souvent moins bien optimisés que les thèmes payants. Les thèmes payants comme ceux publiés sur [ThèmeForest](http://themeforest.net/category/wordpress?ref=bygga) doivent passer plusieurs inspections par les développeurs de ThemeForest avant d'être autorisé à la vente.

Parmi les thèmes WordPress payant, vous pouvez aussi choisir ceux qui sont les plus simples. Ne prenez pas un thème avec pleins d'images, de slider et d'effets de style. Certes c'est joli, mais ça prend également plus de temps à charger. Trouvez donc un bon compromis.

NewsMag est un bon exemple d'un thème optimisé et qui convient parfaitement aux magazines. Même si ce thème est complexe et propose beaucoup de contenu, il à un scrore de **90/100** sous *Page Speed*.
[<img src="/assets/img/articles/newsmag.jpg" class="aligncenter" />](http://themeforest.net/item/newsmag-news-magazine-newspaper/9512331?ref=bygga)

## 3. Utilisez un plugin de cache
Vous avez un serveur rapide, un thème optimisé. La prochaine étape consiste à réduire le nombre d'appels à votre base de donnée en utilisant une technique de *cache*.

Je ne vais pas rentrer dans les détails pour ne pas perdre tout le monde, mais il existe une solution extra simple pour réduire le temps de réponse de votre site WordPress. Vous pouvez utiliser un plugin de cache. Je vous recommande d'utiliser [W3 Total Cache](http://wordpress.org/extend/plugins/w3-total-cache/). 

<img src="/assets/img/articles/w3-total-cache.jpg" class="aligncenter" />

Ce plugin est facile à prendre en main. Si vous voulez découvrir comment le configurer dans les détails suivez ce [guide](http://www.wppourlesnuls.com/comment-installer-et-configurer-w3-total-cache-pour-debutants/).

## 4. Utiliser un Content Delivery Network (CDN)
L'idée d'un Content Delivery Network (CDN) c'est de réduire la charge sur votre serveur. Même si votre serveur est puissant, tout le contenu de votre site est téléchargé depuis un seul et unique serveur. Ca peut créer des bouchons.

Un CDN ce sont des dizaines de serveurs qui vont délivrer une partie de votre contenu static (vos images, HTML, script...) directement aux visiteurs.

<img src="/assets/img/articles/maxcdn.jpg" class="aligncenter" />

L'autre gros avantages des CDN c'est que les serveurs sont aux quatre coins du monde. Vos visiteurs vont donc pouvoir télécharger votre site depuis le serveur le plus proche de chez eux.

Il existe deux gros acteurs dans les CDN : [CloudFlare](https://www.cloudflare.com/) qui est gratuit ou [MaxCDN](https://www.maxcdn.com/) qui est payant mais avec plus d'options.

## 5. Optimiser vos images
Une images avec un million de pixel c'est joli. Mais c'est loin d'être utilise sur votre site. (Sauf si vous êtes photographe bien sûr.)

Sous WordPress c'est extremement facile d'optimiser vos images. Il existe bien sûr des plugins qui vous peuvent faire tout cela automatiquement. Le plus populaire est [EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/).

<img src="/assets/wp-content/uploads/2015/07/EWWW-Image-Optimizer-620x199.jpg" class="aligncenter" />

Même si son nom à loin d'être sérieux, ce plugin propose une mine d'or d'optimisations. Que vos images soit des JPG ou bien des PNG, il existe plusieurs algorithmes qui peuvent réduire la taille des images en conservant plus ou moins la qualité de celle-ci. EWWW Image Optimizer permet de passer toutes vos images à la moulinette pour les optimiser et réduire la taille en un seul clic.

Découvrez d'autres plugins et d'autres conseils pour réduire la taille de vos images dans ce guide :  
[Comment optimiser vos images sous WordPress](/comment-optimiser-vos-images-sous-wordpress/).

## 6. Optimiser la base de donnée WordPress
Chaque options, chaque catégorie, chaque commentaire et chaque version de vos articles sont sauvegardé dans la base de donnée de WordPress sur votre serveur.

Cela représente un nombre colossale d'information. Le problème c'est que lorsque vous voulez afficher votre article numero 20, vous devez chercher parmi toutes ces données pour trouver la bonne. Il est bien plus facile de trouver l'information parmi 200 plutôt que parmi 2000.

Il est donc important que vous supprimiez les données inutiles de votre base de donnée de temps en temps. Vous n'avez sans doute pas besoin de garder un historique de toutes les révisions de vos articles.

Vous pouvez utiliser le plugin WordPress [WP-Sweep](https://sv.wordpress.org/plugins/wp-sweep/) qui se charge de supprimé les entrées inutiles de votre base de donnée. Cette extension est simple à utiliser, mais n'oubliez pas de faire une sauvegarde de votre base de donnée avant de la nettoyer. Ce plugin à une très bonne réputation, mais on n'est jamais trop prudent.

## 7. Afficher vos images au fur et à mesure
Cette technique d'optimisation pour réduire le temps de chargement initial de votre site web est très à la mode. Il s'agit de télécharger vos fichier images (et donc de les afficher) uniquement si le visiteur s'en rapproche.

Vous conviendrez qu'il est inutile de télécharger les images en bas de votre page si le visiteur se trouve tout en haut. En mettant un délais pour le téléchargement de ces images, vous diminuez la demande sur votre serveur, ce qui permet d'afficher le texte et les premières images bien plus rapidement et ainsi [diminuer le taux de rebond](/taux-de-rebond-10-conseils-pour-lameliorer-significativement/).

Au fur et à mesure que le visiteur descend vers le bas de votre page, les images sont téléchargées puis affichées. C'est complètement transparant pour l'utilisateur.

<img src="/assets/img/articles/unveil-lazy-load.jpg" class="aligncenter" />

Un plugin qui fonctionne très bien pour utiliser cette méthode sous WordPress c'est [Unveil Lazy Load](https://wordpress.org/plugins/unveil-lazy-load/). Il suffit d'activer le plugin et tout se fait automatiquement, parfait pour les débutants qui veulent optimiser leur blog.

## 8. Remplacez une partie du PHP par du HTML
Cette astuce demande de modifier votre thème. Si vous ne vous en sentez pas capable vous pouvez sauter cette étape. Pour les autres, vous pouvez économiser quelques requète à votre base de donnée en utilisant directement du language HTML plutôt que du PHP.

Voici par exemple quelques partie de votre thème que vous pouvez transformer en HTML. Regardez dans votre fichier *header.php*.

```php
<title><?php bloginfo('name'); ?> <?php bloginfo('description');?></title>
<link rel="shorcut icon" type="image/x-ico" href="<php bloginfo('template_url'); ?>/favicon.jpg" />
<link rel="stylesheet" type="text/css" media="screen" href="<?php bloginfo('stylesheet_url'); ?>"/>
<link rel="stylesheet" type="text/css" media="print" href="<?php bloginfo('template_url'); ?>/print.css" />
<link rel="alternate" type="application/rss+xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
```

Vous pouvez sans doute remplacer chacune des fonctions ci-dessus par son équivalent HTML. Celà va sauver 5 requête pour chaque page que le visiteur affiche.

Pourquoi est-ce que ce n'est pas fait par défaut? C'est uniquement parce qu'un thème n'est pas optimiser pour un seul utilisateur. Les thèmes doivent être flexibles pour que tout le monde puisse avoir son propre titre, son propre emplacement des fichers CSS, etc...

## 9. Réduire la taille de votre CSS
Si vous avez acheté un [thème WordPress](/themes-wordpress-profession/), il y a des chances que vous n'utilisiez que 20% de sa puissance.

Pour vendre leur thème les développeurs ajoutent des centaines de shortcode, de typographie, de pages spéciales, etc... Certe à fait vendre, mais ça alourdie énormément votre fichier de style CSS.

Faites donc un petit tour sur ce fichier (surement sous le nom de style.css) et regardez si vous ne pouvez pas en enlever quelques partie. C'est plutôt réservé à ceux qui comprennent le CSS, mais il y a un énorme potentiel pour sauver des kilobites de codes.

On peut souvent passer d'un ficher style à 300kB et le réduire à 50kB. Ce sont 250kB qui sont économisés !

## 10. Ne chargez pas systématiquement vos fichiers jQuery
Si vous regardez le code source de votre site, vous allez voir qu'il y a sans doute une dizaines de script qui sont téléchargés sur chaque page. C'est beaucoup trop !

Souvent les développeurs de thèmes et de plugins se simplifient la vie et chargent leur script sur chaque page de votre site. Quel intérêt ? Aucun !

Si vous avez un slider qui n'apparait que sur votre page d'acceuil, n'allez pas charger le script sur toutes vos autres pages.

Allez donc faire un tour sur votre fichier <code>function.php</code> et regardez si vous ne pouvez utiliser un <code>if</code> pour ne charger vos scripts que sous certaines conditions. 

Voici un exemple pour vous inspirer :

```php
<?php 
add_action( 'wp_enqueue_scripts', 'bygga_charger_scripts' );
   function bygga_charger_scripts(){
      /* remplacer /js/slider-accueil.js par votre propre fichier */
      wp_register_script( 'slider-accueil', get_template_directory_uri().'/js/slider-accueil.js');
      if ( is_front_page() ) {
         wp_enqueue_script('slider-accueil');
      }
   }
?>
```

## 11. Supprimez les extensions trop lentes
Tous les plugins ne sont pas optimisés. Loin de là...
Il est donc important que vous ayez une idée de l'impact de chaque extension sur le temps total de chargement de votre site. Certain plugins peuvent utiliser une seconde pour se charger. Une seconde c'est énorme et vous devez vous poser la question si ce plugin est vraiment nécessaire.

<img src="/assets/img/articles/p3-profiler.jpg" class="aligncenter" />

Pour savoir quel est l'impact de chaque plugin sur le temps de chargement de votre site, vous pouvez installer le plugin [P3 Profiler](http://wordpress.org/plugins/p3-profiler/).

Cette extension va passer votre site à la moulinette et vous donner un rapport détaillé de l'impact de chaque extension sur le temps de chargement de vos pages. Vous allez vite pouvoir vous rendre compte des plugins qui "volent" les ressources de votre serveur.

Profitez-en aussi pour supprimer tous les plugins que vous n'utilisez pas. 

## 12. Supprimez les commentaires indésirables

<img src="/assets/img/articles/supprimer-commentaires.jpg" class="aligncenter" />

Si vous suivez l'astuce 6 sur l'optimisation de votre base de donnée, vous êtes déjà couvert. Sinon souvenez vous bien de supprimer les commentaires indésirables qu'Akismet découvre. Si votre site est populaire comme le mien, vous pouvez recevoir une centaine de commentaires indésirables par jour qui viennent uniquement prendre de la place dans votre base de donnée. 

Vous pouvez trouver plus d'information en lisant cet article, ma foi très bon. [Le guide complet pour accélérer et optimiser WordPress](https://bulledev.com/optimiser-wordpress/)
