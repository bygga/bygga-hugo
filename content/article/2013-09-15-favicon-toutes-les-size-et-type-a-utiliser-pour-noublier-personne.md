---
title: Favicon - Toutes les size et type à utiliser pour n'oublier personne
description: Un guide complet du favicon et tous ses formats, comme Apple, Windows, Android, etc...
author: Simon
date: 2013-09-15
url: /favicon-toutes-les-size-et-type-a-utiliser-pour-noublier-personne/
categories: Développement Web
---
## Qu&rsquo;est-ce qu&rsquo;un Favicon

Un favicon correspond à l&rsquo;icône qui s&rsquo;affiche juste avant le titre de la page internet que vous visiter. Dans Chrome par exemple, le favicon se retrouve sur la gauche dans chaque onglet. 

<img src="http://www.bygga.fr/wp-content/uploads/2013/09/favicon-facebook.jpg" alt="Favicon de Facebook" width="276" height="33" class="aligncenter size-full wp-image-891" />

Cet image est très utilisée puisqu&rsquo;elle permet à vos visiteurs de rapidement identifier votre site internet lorsque plusieurs onglets sont ouverts. 

Mais un favicon peut être utilisé également par le navigateur internet à d&rsquo;autres endroits. Il peut être affiché par exemple lorsque vous ajouter une page à vos favoris, ou bien sous iOS et Windows 8 lorsque vous créez un raccourci vers un site internet.

## Comment ajouter un favicon à votre site internet

### Classique Favicon &#8211; Obligatoire

Ce que j&rsquo;appelle le classique favicon, c&rsquo;est l&rsquo;icône qui est utilisée et affiché par les navigateurs internet. C&rsquo;est donc la plus courante et aussi la plus simple à installer. Pour ce faire rien de plus simple. Il suffit de créer une favicon, de nommer le fichier <code>favicon.ico</code> et de le placer directement au plus haut niveau de votre site. (Dans le dossier parent).

Il n&rsquo;y a pas besoin d&rsquo;ajouter du code HTML dans ce cas. Tous les navigateurs internet vont chercher le fichier favicon.ico dans le dossier de votre site. 

### Favicon pour iOS 2.0+ et Android 2.1+ &#8211; Optionnel

Il s&rsquo;agit de l&rsquo;icône qui s&rsquo;affiche lorsque vous sauvegardez un site internet sur la page d&rsquo;accueil de votre téléphone sous Android et iOS. 

Pour permettre cette fonction, ajouter la ligne suivante dans le header de votre site, dans la balise <code>&lt;head&gt;</code>. 

<pre class="language-html"><code>&lt;link rel="apple-touch-icon-precomposed" href="path/to/favicon-152.png"&gt;</code></pre>

Explication: 

  * &laquo;&nbsp;path/to/favicon-152.png&nbsp;&raquo; correspond au chemin vers lequel vous avez votre image. Par exemple image/favicon-152.png. 
  * L&rsquo;image en question doit être au format .png
  * L&rsquo;image doit avoir une taille de 152px x 152px.

Sous WordPress vous pouvez ajouter le code suivant dans votre fichier <code>function.php</code>.

<pre class="language-php"><code>function mon_favicon() { ?&gt;
&lt;link rel="apple-touch-icon-precomposed" href="path/to/favicon-152.png"&gt;
&lt;?php }
add_action('wp_head', 'mon_favicon');</code>
</pre>

### Favicon pour Internet Explorer 10 Metro &#8211; Optionnel

Comme pour les favicon ci-dessus, si vous utilisez IE10 vous pouvez avoir une image associé aux tuiles que vous créer. Utilisez le code suivant, également à placer dans la balise <code>&lt;head&gt;</code>.

<pre class="language-html"><code>&lt;meta name="msapplication-TileColor" content="#FFFFFF"&gt;
&lt;meta name="msapplication-TileImage" content="/path/to/favicon-144.png"&gt;</code>
</pre>

Dans ce cas, l&rsquo;icône doit avoir une taille de 144x144px et être au format .png.

### Extra Favicon pour iOS &#8211; Optionnel

Selon les versions d&rsquo;Apple iOS et de la résolution de l&rsquo;écran (Retina ou non Retina), il existe différente taille de favicon que vous pouvez ajouter. En voici la liste.

<pre class="language-html"><code>&lt;!-- For iPad with high-resolution Retina display running iOS ≥ 7: --&gt;
&lt;link rel="apple-touch-icon-precomposed" sizes="152x152" href="/path/to/favicon-152.png"&gt;

&lt;!-- For iPad with high-resolution Retina display running iOS ≤ 6: --&gt;
&lt;link rel="apple-touch-icon-precomposed" sizes="144x144" href="/path/to/favicon-144.png"&gt;

&lt;!-- For iPhone with high-resolution Retina display running iOS ≥ 7: --&gt;
&lt;link rel="apple-touch-icon-precomposed" sizes="120x120" href="/path/to/favicon-120.png"&gt;

&lt;!-- For iPhone with high-resolution Retina display running iOS ≤ 6: --&gt;
&lt;link rel="apple-touch-icon-precomposed" sizes="114x114" href="/path/to/favicon-114.png"&gt;

&lt;!-- For first- and second-generation iPad: --&gt;
&lt;link rel="apple-touch-icon-precomposed" sizes="72x72" href="/path/to/favicon-72.png"&gt;

&lt;!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: --&gt;
&lt;link rel="apple-touch-icon-precomposed" href="/path/to/favicon-57.png"&gt;</code>
</pre>

## Comment créer une favicon 

Pour les images au format .png vous pouvez utiliser Photoshop, Gimp, voir même paint. Commencez un nouveau fichier et sélectionnez la taille en pixel qui correspond à l&rsquo;icône que vous voulez. Sauvegardez et utilisez ensuite votre client FTP pour envoyer l&rsquo;image chez votre hébergeur de site internet.

Pour créer un fichier .ico, vous pouvez commencer par créer un fichier .png et ensuite aller sur le site internet <a href="http://www.faviconer.com" title="Convertir Favicon" target="_blank">Faviconer.com</a> pour convertir l&rsquo;image PNG en ICO. Il est même possible de dessiner à la main l&rsquo;icône directement.

<small>Référence: <a title="Favicon cheatsheet" href="https://github.com/audreyr/favicon-cheat-sheet">AudreyR</a></small>