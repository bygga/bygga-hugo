---
title: Comment créer un barre de navigation fixe en bas d'une page
description: Tirer les avantages d'un barre fix en pied de page
author: Simon
date: 2012-09-22
url: /comment-creer-un-barre-de-navigation-fixe-en-bas-dune-page/
categories: Développement Web
tags: WordPress
---
## Exemple d'une barre fixe en pied de page de WordPress

Parce que des fois une image fonctionne mieux que des mots, voici ce que nous allons créer : La barre noire en bas de ce site.  
<img src="http://www.bygga.fr/wp-content/uploads/2012/09/fixe-barre.png" alt="Barre noire fixe en bas de la page" title="fixe-barre" width="500" height="245" class="aligncenter size-full wp-image-329" />  
Il s’agit d’une barre personnalisable, qui reste fixe en bas de votre écran, même lorsque vous vous déplacez sur la page.  
Dans cette exemple, le contenu est un lien, mais on peut imaginer y trouver une image, une bannière publicitaire, un fil d’actualité, un menu de navigation.

## Quel intérêt de créer une barre fixe ?

Hum… parce que le visiteur de votre site va toujours la voir ! Quel que soit le contenu qu’il voit et sa position sur la page, la barre sera là.  

P**ratique donc pour attirer son attention sur quelque chose : une publicité, un lien vers un article, une information importante, ou bien votre menu de navigation.** Soyez créatif avec son usage.

## Comment ajouter cette barre sur mon site

Puisque ce site est spécialisé sur la plateforme WordPress, je vais vous donner l’exemple pour WordPress. A vous de l’adapté pour un site quelconque.

Rendez-vous dans votre fichier <code>footer.php</code> et copiez le code HTML juste avant la balise <code>&lt;/body&gt;</code>.  
Dans cette exemple, la barre va afficher un simple lien, statique.

<pre class="language-html">
<code>
&lt;div class="fixedBar"&gt;
        &lt;div class="boxfloat"&gt;
               &lt;ul id="tips"&gt;
                       &lt;li&gt;&lt;a href="http://www.bygga.fr/"&gt;Lien vers Bygga&lt;/a&gt;&lt;/li&gt;                    
               &lt;/ul&gt;
        &lt;/div&gt;
&lt;/div&gt;
</code>
</pre>

Insérez ensuite le code suivant dans votre fichier de style CSS. Il est souvent appelé <code>style.css</code>.  
Il s’agit du code pour styler la barre. Dans ce cas elle sera noire et le texte blanc.

<pre class="language-css">
<code>
/*Barre fixe dans le pied de page*/
/*Pour changer la couleur du fond remplacez #000, pour la couleur du texte #fff. Taille de la police de caractère 16px*/ 
.fixedBar{background: #000; bottom: 0px; color:#fff; font-family: Arial, Helvetica, sans-serif; left:0; padding: 0px 0; position:fixed; font-size:16px; width:100%; z-index:99999; float:left; vertical-align:middle; margin: 0px 0 0; opacity: 0.95; font-weight: bold;}
 
.boxfloat{text-align:center; width:920px; margin:0 auto}
 
#tips, #tips li{margin:0; padding:0; list-style:none}
#tips{width:920px; font-size:20px; line-height:120%;}
#tips li{padding: 15px 0; display:none}
#tips li a{color: #fff;}
#tips li a:hover{text-decoration: none;}
</code>
</pre>

  * Il est possible de modifier la couleur et la taille en modifiant le code CSS copié dans le fichier <code>style.css</code>.
  * Si vous voulez afficher un lien dynamique, différent sur chaque page, vous pouvez ajouter du langage PHP ou Jquery au lien.
  * Pour ajouter une bannière copiez juste votre code (code Adsense par exemple) à la place de la balise <code>&lt;a&gt;</code> dans le footer.

Cette astuce s’inspire d’un article paru sur [WPBeginner.com][1]

 [1]: http://www.wpbeginner.com/wp-tutorials/how-to-create-a-sticky-floating-footer-bar-in-wordpress/ "barre navigation fixe"
