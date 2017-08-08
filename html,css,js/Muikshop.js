var myShop = {
 'Klasik' : {
  '001' : {
    'title' : "Mozart ve Sevgi"
   ,'artist' : "Mozart"
   ,'year' : 1911
  }
  ,'002' : {
    'title' : "9.Senfoni"
   ,'artist' : "Betofın"
   ,'year' : 1913
  }
 }
 ,'Hip Hop' : {
  '006' : {
    'title' : "Down with the King"
   ,'artist' : "Run DMC"
   ,'year' : 1993
  }
  ,'005' : {
    'title' : "Touch This"
   ,'artist' : "Mc Hammer"
   ,'year' : 1992
  }
 }
 ,'Rock' : {
  '003' : {
    'title' : "Justice for all"
   ,'artist' : "Metallica"
   ,'year' : 1991
  }
  ,'004' : {
    'title' : "Loaded into it"
   ,'artist' : "Rage Against the Machine"
   ,'year' : 1998
  }
 }
}
var objSelectedCategory = myShop[ 'Klasik' ];
for( var strItemID in objSelectedCategory )
{
 var strAlbumTitle = objSelectedCategory[ strItemID ][ 'title' ];
 var strAlbumArtist = objSelectedCategory[ strItemID ][ 'artist' ];
 var strAlbumYear = objSelectedCategory[ strItemID ][ 'year' ];
 window.alert( strAlbumTitle );
}
