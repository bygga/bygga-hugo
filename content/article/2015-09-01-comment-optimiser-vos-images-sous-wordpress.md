---
title: Comment optimiser vos images sous WordPress
description: Voici des astuces pour réduire la taille de vos images et optimiser la vitesse de chargement
author: Simon
date: 2015-09-01
url: /comment-optimiser-vos-images-sous-wordpress/
categories: Optimisation
---
## La taille des images est importante

La taille de vos images est un élément important pour votre site internet. Pourquoi ? Tout simplement parce qu&rsquo;une image de grosse taille (supérieure à 200kB) va prendre beaucoup (trop ?) de temps à se charger sur votre site et il y a des risques que le visiteur n&rsquo;attentent même pas la fin du téléchargement et quite votre site. C&rsquo;est dommage !

200kB cela ne semble pas beaucoup, mais n&rsquo;oubliez pas que beaucoup de vos visiteurs utilisent leur téléphone portable pour naviguer votre site. La puissance des téléphones est souvent moindre qu&rsquo;un ordinateur et cela consomme également des données de leur abonnements.

Google lui même propose des conseils au webmaster pour <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization" target="_blank">optimiser leur images</a> (information en anglais).

Je vous conseille de regarder leur page pour comprendre quels sont les dernières techniques modernes pour optimiser vos photos et réduire leur taille. 

## Plugin WordPress pour optimiser vos images

Dans cet article je vais me concentrer sur les solutions offertes par WordPress. Comme d&rsquo;habitude, la communauté propose de nombreux plugin qui viennent ajouter chacun une touche d&rsquo;optimisation pour vos photos. Voici une sélection des meilleurs.

### EWWW Image Optimizer

[<img src="http://www.bygga.fr/wp-content/uploads/2015/07/EWWW-Image-Optimizer-620x199.jpg" alt="EWWW Image Optimizer" width="620" height="199" class="aligncenter size-large wp-image-1102" />][1]  
Même si son nom ne fait pas des plus sérieux (?), le plugin WordPress EWWW Image Optimizer est l&rsquo;un des meilleurs disponible pour optimiser vos images. L&rsquo;optimisation est peut être choisie comme destructive ce qui signifie que vos photos seront plus floues et moins nettes. Mais vous pouvez toujours choisir si vous souhaiter favoriser la taille de l&rsquo;image ou bien sa qualité. L&rsquo;oeil humain n&rsquo;est pas parfait et la différence n&rsquo;est souvent pas si flagrante. 

Vous pouvez aussi convertir les images qui ne font pas partie de votre librairie. Pratique par exemple si vous utilisez NextGEN galerie.

### WP Smush

[<img src="http://www.bygga.fr/wp-content/uploads/2015/07/WP-Smush-620x202.jpg" alt="WP Smush" width="620" height="202" class="aligncenter size-large wp-image-1101" />][2]  
Wp Smush est facile à utiliser. Une fois le plugin installé, vous pouvez optimiser en un click toutes vos photos. Le plugin ne détériore pas la qualité de vos photos, il enlève uniquement certain éléments cachés qui ne sont pas utiles aux visiteurs. Le gain est donc limité.

### BJ Lazy Load
[<img src="http://www.bygga.fr/wp-content/uploads/2015/07/BJ-Lazy-Load-620x199.jpg" alt="BJ Lazy Load" width="620" height="199" class="aligncenter size-large wp-image-1103" />][3]  
Maintenant que vous avez optimisé vos images avec l&rsquo;un des deux plugins ci-dessus, vous pouvez utiliser BJ Lazy Load sur votre blog WordPress. Ce plugin remplace toutes vos images par un rectangle lorsque votre page est chargé. Ce n&rsquo;est que lorsque le visiteur fait défiler la page et arrive au niveau de l&rsquo;image que le plugin télécharge l&rsquo;image depuis votre serveur et remplace le rectangle.  
L&rsquo;intérêt c&rsquo;est que votre site s&rsquo;affiche plus rapidement puisque vous n&rsquo;avez que du texte à télécharger au départ. Cela ne sert à rien de télécharger toutes les images si le visiteurs n&rsquo;a pas l&rsquo;intention de faire défiler tout votre site.

## Règles générales pour optimisez vos images

Les plugins WordPress si-dessus sont très bien pour optimiser vos images, mais si vous ne faites pas quelques efforts vous mêmes, ils ne pourront pas tout faire tout seul. Suivez-donc ces conseils pour bien optimiser vos images avant même de les mettre sous WordPress.

### JPEG, PNG or GIF ?

Vous avez souvent le choix entre trois formats pour les images et photos. Il en existe d&rsquo;autre, mais JPEG, PNG et GIF sont les plus populaires.

Chacun à ses avantages et il est donc important de bien choisir. Voici de quoi vous aider.

  * **GIF**: Si votre image est une animation. Si c&rsquo;est une photo statique, ne pas utiliser.
  * **PNG**: Si votre image à besoin d&rsquo;être transparente (souvent le fond) ou bien n&rsquo;est composée que de quelques couleurs (donc pas une photo, mais plutôt un logo). 
  * **JPEG**: Pour tous les autres cas. C&rsquo;est souvent dans ce format là que votre image prendra le moins de place.

Google propose une description plus détaillée, en anglais, de [comment choisir le format idéal pour ses photos][4].

### Choisir la bonne taille

Si votre site internet à une largeur de 690px pour le contenu, cela ne sert à rien d&rsquo;afficher des images de taille plus grande. Vous gaspillez des pixels. 

Dans WordPress, lorsque vous mettez en ligne une image vous pouvez sélectionner la taille que vous voulez ajouter.  
<img src="http://www.bygga.fr/wp-content/uploads/2015/07/taille-image.png" alt="taille-image" width="283" height="191" class="aligncenter size-full wp-image-1105" />  
Ne choisissez pas &laquo;&nbsp;Taille originale&nbsp;&raquo;, mais choisissez une taille plus petite qui correspond à la largeur de votre contenu ou plus petit.

[1]: https://wordpress.org/plugins/ewww-image-optimizer/
[2]: https://wordpress.org/plugins/wp-smushit/
[3]: https://wordpress.org/plugins/bj-lazy-load/
[4]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?#selecting-the-right-image-format
