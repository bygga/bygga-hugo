---
title: Comment faciliter la traduction de son thème WordPress
description: Développeur de thèmes WordPress, voici comment en facilité leur traduction
author: Simon
date: 2012-09-26
url: /comment-faciliter-la-traduction-de-son-theme-wordpress/
categories: Developpement Web
tags: WordPress
---
## WordPress, l&rsquo;anglais et le français

L&rsquo;anglais est de loin la langue la plus utilisée dans [les thèmes WordPress][1]. Il est très rare qu&rsquo;un thème soit mis en vente sous une autre langue. Mais cela ne doit pas empêcher les utilisateurs d&rsquo;avoir le thème sur un site en français ou en espagnol.

Il est donc important que le développeur du thème permette la [traduction][2] de son thème d&rsquo;une manière aisée sans avoir à changer manuellement l&rsquo;ensemble du texte.

Les développeurs de WordPress ont pensé à tout et mettent à la disposition des programmeurs, deux fonctions PHP pour permettre la traduction : <code>\_e()</code> et <code>\__()</code>.

## Utilisation de \_e() et \__()

Lorsque vous ajoutez du texte au thème que vous développez, faites le passer en argument de la fonction <code>_e()</code>.  
Example : 
<pre class="language-php">
<code>
_e(All rights reserved,'bygga'); 
</code>
</pre>
Le texte All rights reserved sera affiché, à moins qu&rsquo;il n’existe un fichier de localisation en français, de nom &lsquo;bygga&rsquo; et une traduction française sera affichée à la place.  
L&rsquo;avantage c&rsquo;est que le futur utilisateur n&rsquo;a pas besoin de parcourir l&rsquo;ensemble de votre code pour trouver les textes à modifier.

Si vous ne souhaitez pas directement afficher le texte, mais l&rsquo;utiliser en tant que variable, utiliser la fonction <code>\__()</code> à la place.  
<code>\_e()</code> est équivalent à <code><?php echo \__(); ?></code>

Si vous souhaitez plus d&rsquo;information sur ces fonctions et leurs petites soeurs, vous pouvez consulter directement le <a href="http://codex.wordpress.org/Translating_WordPress" title="traduire WordPress" target="_blank">codex de WordPress</a>. 

## Outil de traduction

L&rsquo;utilisateur à la possibilité de traduire manuellement le texte que vous avez inséré grâce à ces deux fonctions en utilisant notamment le plugin <a href="http://wordpress.org/extend/plugins/codestyling-localization/" title="Codestyling Localization Plugin" target="_blank">Codestyling Localization</a>  
Vous pouvez trouver un tuto sur ce plugin dans notre article sur la <a href="http://www.bygga.fr/comment-traduire-un-theme-wordpress-en-francais/" title="Comment traduire un thème WordPress en francais" target="_blank">traduction d&rsquo;un thème en français</a>.

 [1]: http://www.bygga.fr/c/design/selection-de-themes/ "Thème WordPress"
 [2]: http://www.bygga.fr/comment-traduire-un-theme-wordpress-en-francais/ "Comment traduire un thème WordPress en francais"