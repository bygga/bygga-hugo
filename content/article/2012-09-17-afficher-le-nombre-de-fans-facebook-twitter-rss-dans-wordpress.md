---
title: Afficher le nombre de fans Facebook, Twitter, RSS dans WordPress
description: Voici comment facilement afficher le nombre de fans dans votre flux RSS
author: Simon
date: 2012-09-17
url: /afficher-le-nombre-de-fans-facebook-twitter-rss-dans-wordpress/
categories: Developpement Web
tags: WordPress
---
Voici une astuce rapide pour afficher votre nombre de personne qui se sont abonné à votre flux RSS, votre page Facebook ou bien votre compte Twitter.  
Ces données sont récupéré par PHP en utilisant les API des différents services. Voici le code que vous devez ajouter dans votre fichier function.php. Aucun plugin nécessaire.  
<img src="http://www.bygga.fr/wp-content/uploads/2012/09/Fan-Facebook.png" alt="Afficher Fan Facebook" title="Fan-Facebook" width="311" height="125" class="aligncenter size-full wp-image-250" />

## Afficher le nombre de fans Facebook

Pour que cela fonctionne vous devez connaitre votre ID Facebook (un nombre à 15 chiffres) ou bien le nom de votre page (<code>http://www.facebook.com/**nom**</code>).  
N’oubliez pas de remplacer &laquo;&nbsp;votre-nom-ou-ID&nbsp;&raquo; par votre propre nom ou ID.  
Code à ajouter dans le fichier <code>function.php</code>

<pre class="language-php">
<code>
/*************************************************************
Fans Facebook. Retourne et affiche le nombre de fans Facebook
**************************************************************/
bygga_afficher_fans_facebook(){
   $facebook = json_decode(file_get_contents('http://graph.facebook.com/votre-nom-ou-ID'), true);
   echo $facebook_count = $facebook['likes']; 
}
</code>
</pre>

Pour afficher le nombre de [fans Facebook][1], insérez le code suivant dans votre thème, par exemple dans <code>single.php</code>.

<pre class="language-php">
<code>
&lt;p&gt;Nombre de fans Facebook : &lt; ?php bygga_afficher_fans_facebook() ;?&gt;&lt;/p&gt;
</code>
</pre>

## Afficher le nombre d’abonnés à votre compte Twitter

Même démarche que pour Facebook. Récupérez votre nom sous Twitter (<code>http://www.twitter.fr/**nom**</code>) et remplacez le dans le code ci-dessous.  
Code à ajouter dans le fichier <code>function.php</code>

<pre class="language-php">
<code>
/****************************************************************
Abonnés Twitter. Retourne et affiche le nombre d’abonnés Twitter
*****************************************************************/
bygga_afficher_abonnes_twitter(){
   $twitter = json_decode(file_get_contents('https://api.twitter.com/1/users/lookup.json?screen_name=votre-nom'), true);
   echo $twiter_count = $twitter[0]['followers_count'];
}
</code>
</pre>

Pour afficher le nombre d’abonnés Twitter, insérez le code suivant dans votre thème, par exemple dans <code>single.php</code>.

<pre class="language-php">
<code>
&lt;p&gt;Nombre d’abonnés Twitter : &lt; ?php bygga_afficher_abonnes_twitter () ;?&gt;&lt;/p&gt;
</code>
</pre>

## Afficher le nombre d’abonné à votre flux RSS

Pour que ce code fonctionne vous devez avoir un compte <a href="http://feedburner.google.com/" title="Feedburner" target="_blank">Feedburner</a>, activé l’API Feedburner Awareness et l’url de votre flux RSS. Remplacez &laquo;&nbsp;http://feeds.feedburner.com/votre-nom&nbsp;&raquo; par l’url de votre flux dans le code suivant.  
Code à ajouter dans le fichier <code>function.php</code>

<pre class="language-php">
<code>
/*************************************************************
Abonnés Flux RSS. Retourne et affiche le nombre d’abonnés RSS
**************************************************************/
bygga_afficher_abonnes_rss(){
   $rss = file_get_contents('http://feedburner.google.com/api/awareness/1.0/GetFeedData?uri=http://feeds.feedburner.com/votre-nom?format=xml');
   $xml = new SimpleXmlElement($rss);
   echo $rss_count = $xml-&gt;feed-&gt;entry-&gt;attributes()-&gt;circulation;
 
}
</code>
</pre>

Pour afficher le nombre d’abonnés au flux RSS, insérez le code suivant dans votre thème, par exemple dans <code>single.php</code>.

<pre class="language-php">
<code>
&lt;p&gt;Nombre d’abonnés au flux RSS : &lt;?php bygga_afficher_abonnes_rss () ;?&gt;&lt;/p&gt;
</code>
</pre>

Si vous ne voulez pas afficher ces données mais uniquement les utiliser dans une autre fonction vous pouvez faire cela en supprimant seulement le mot &laquo;&nbsp;echo&nbsp;&raquo; dans chacune des fonctions PHP.

[1]: http://www.bygga.fr/5-plugins-pour-avoir-plus-de-fans-facebook-avec-wordpress/ "5 plugins pour avoir plus de fans Facebook avec WordPress"
