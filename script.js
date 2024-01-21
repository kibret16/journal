if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[PWA Builder] active service worker found, no need to register");
  } else {
    navigator.serviceWorker
      .register("pwabuilder-sw.js", {
        scope: "./"
      })
      .then(function(reg) {
        console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
      });
  }
}

function amh(id,event,ctrl)
{
  var id = id;
	var lettercode = event.keyCode;
  var element = document.getElementById(id);
  var tv = element.value;
	
	var cur_p = element.selectionStart;
	var remaining = tv.length-cur_p;
	tv = changetexttoamharic(tv);
	element.value = tv; 	
	
	cur_p = tv.length-remaining;
	element.selectionStart = cur_p;
	element.selectionEnd = cur_p; 	
}

function changetexttoamharic(text)
{
	tv = text;
	
	tv = tv.replace("b","ብ");
  tv = tv.replace("B","ብ");
  tv = tv.replace("ብe","በ");
  tv = tv.replace("ብu","ቡ");
  tv = tv.replace("ብi","ቢ");
  tv = tv.replace("ብa","ባ");
    tv = tv.replace("ቡa","ቧ");//_ua
  tv = tv.replace("ቢe","ቤ");
    tv = tv.replace("ብE","ቤ");//_ie
  tv = tv.replace("ብo","ቦ");

  tv = tv.replace("c","ች");
  tv = tv.replace("ችe","ቸ");
  tv = tv.replace("ችu","ቹ");
  tv = tv.replace("ችi","ቺ");
  tv = tv.replace("ችa","ቻ");
    tv = tv.replace("ቹa","ቿ");//_ua
  tv = tv.replace("ቺe","ቼ");
    tv = tv.replace("ችE","ቼ");
  tv = tv.replace("ችo","ቾ");
  
  tv = tv.replace("d","ድ");
  tv = tv.replace("D","ድ");
  tv = tv.replace("ድe","ደ");
  tv = tv.replace("ድu","ዱ");
  tv = tv.replace("ድi","ዲ");
  tv = tv.replace("ድa","ዳ");
    tv = tv.replace("ዱa","ዷ");//_ua
  tv = tv.replace("ዲe","ዴ");
    tv = tv.replace("ድE","ዴ");
  tv = tv.replace("ድo","ዶ");

  tv = tv.replace("f","ፍ");
  tv = tv.replace("F","ፍ");
  tv = tv.replace("ፍe","ፈ");
  tv = tv.replace("ፍu","ፉ");
  tv = tv.replace("ፍi","ፊ");
  tv = tv.replace("ፍa","ፋ");
    tv = tv.replace("ፉa","ፏ");//_ua
  tv = tv.replace("ፊe","ፌ");
    tv = tv.replace("ፍE","ፌ");
  tv = tv.replace("ፍo","ፎ");

  tv = tv.replace("g","ግ");
  tv = tv.replace("G","ግ");
  tv = tv.replace("ግe","ገ");
  tv = tv.replace("ግu","ጉ");
  tv = tv.replace("ግi","ጊ");
  tv = tv.replace("ግa","ጋ");
    tv = tv.replace("ጉa","ጓ");//_ua
  tv = tv.replace("ጊe","ጌ");
    tv = tv.replace("ግE","ጌ");
  tv = tv.replace("ግo","ጎ");

  tv = tv.replace("h","ህ");
  tv = tv.replace("H","ህ");
  tv = tv.replace("ህe","ኸ");
  tv = tv.replace("ህu","ሁ");
  tv = tv.replace("ህi","ሂ");
  tv = tv.replace("ህa","ሀ");
  tv = tv.replace("ህA","ሃ");
    tv = tv.replace("ሁa","ኋ");//_ua
  tv = tv.replace("ሂe","ሄ");
    tv = tv.replace("ህE","ሄ");
  tv = tv.replace("ህo","ሆ");
  
  tv = tv.replace("j","ጅ");
  tv = tv.replace("J","ጅ");
  tv = tv.replace("ጅe","ጀ");
  tv = tv.replace("ጅu","ጁ");
  tv = tv.replace("ጅi","ጂ");
  tv = tv.replace("ጅa","ጃ");
    tv = tv.replace("ጁa","ጇ");//_ua
  tv = tv.replace("ጂe","ጄ");
    tv = tv.replace("ጅE","ጄ");
  tv = tv.replace("ጅo","ጆ");
  
  tv = tv.replace("k","ክ");
  tv = tv.replace("K","ክ");
  tv = tv.replace("ክe","ከ");
  tv = tv.replace("ክu","ኩ");
  tv = tv.replace("ክi","ኪ");
  tv = tv.replace("ክa","ካ");
    tv = tv.replace("ኩa","ኳ");//_ua
  tv = tv.replace("ኪe","ኬ");
    tv = tv.replace("ክE","ኬ");
  tv = tv.replace("ክo","ኮ");
  
  tv = tv.replace("l","ል");
  tv = tv.replace("L","ል");
  tv = tv.replace("ልe","ለ");
  tv = tv.replace("ልu","ሉ");
  tv = tv.replace("ልi","ሊ");
  tv = tv.replace("ልa","ላ");
    tv = tv.replace("ሉa","ሏ");//_ua
  tv = tv.replace("ሊe","ሌ");
    tv = tv.replace("ሊE","ሌ");
  tv = tv.replace("ልo","ሎ");
  
  tv = tv.replace("m","ም");
  tv = tv.replace("M","ም");
  tv = tv.replace("ምe","መ");
  tv = tv.replace("ምu","ሙ");
  tv = tv.replace("ምi","ሚ");
  tv = tv.replace("ምa","ማ");
    tv = tv.replace("ሙa","ሟ");//_ua
  tv = tv.replace("ሚe","ሜ");
    tv = tv.replace("ምE","ሜ");
  tv = tv.replace("ምo","ሞ");
  
  tv = tv.replace("n","ን");
  tv = tv.replace("ንe","ነ");
  tv = tv.replace("ንu","ኑ");
  tv = tv.replace("ንi","ኒ");
  tv = tv.replace("ንa","ና");
    tv = tv.replace("ኑa","ኗ");//_ua
  tv = tv.replace("ኒe","ኔ");
    tv = tv.replace("ንE","ኔ");
  tv = tv.replace("ንo","ኖ");
  
  tv = tv.replace("p","ፕ");
  tv = tv.replace("ፕe","ፐ");
  tv = tv.replace("ፕu","ፑ");
  tv = tv.replace("ፕi","ፒ");
  tv = tv.replace("ፕa","ፓ");
    tv = tv.replace("ፑa","ፗ");//_ua
  tv = tv.replace("ፒe","ፔ");
    tv = tv.replace("ፕE","ፔ");
  tv = tv.replace("ፕo","ፖ");
  
  tv = tv.replace("q","ቅ");
  tv = tv.replace("Q","ቅ");
  tv = tv.replace("ቅe","ቀ");
  tv = tv.replace("ቅu","ቁ");
  tv = tv.replace("ቅi","ቂ");
  tv = tv.replace("ቅa","ቃ");
    tv = tv.replace("ቁa","ቋ");//_ua
  tv = tv.replace("ቂe","ቄ");
    tv = tv.replace("ቅE","ቄ");
  tv = tv.replace("ቅo","ቆ");
  
  tv = tv.replace("r","ር");
  tv = tv.replace("R","ር");
  tv = tv.replace("ርe","ረ");
  tv = tv.replace("ርu","ሩ");
  tv = tv.replace("ርi","ሪ");
  tv = tv.replace("ርa","ራ");
    tv = tv.replace("ሩa","ሯ");//_ua
  tv = tv.replace("ሪe","ሬ");
    tv = tv.replace("ርE","ሬ");
  tv = tv.replace("ርo","ሮ");
  
  tv = tv.replace("s","ስ");
  tv = tv.replace("ስe","ሰ");
  tv = tv.replace("ስu","ሱ");
  tv = tv.replace("ስi","ሲ");
  tv = tv.replace("ስa","ሳ");
    tv = tv.replace("ሱa","ሷ");//_ua
  tv = tv.replace("ሲe","ሴ");
    tv = tv.replace("ስE","ሴ");
  tv = tv.replace("ስo","ሶ");
  
  tv = tv.replace("t","ት");
  tv = tv.replace("ትe","ተ");
  tv = tv.replace("ትu","ቱ");
  tv = tv.replace("ትi","ቲ");
  tv = tv.replace("ትa","ታ");
    tv = tv.replace("ቱa","ቷ");//_ua
  tv = tv.replace("ቲe","ቴ");
    tv = tv.replace("ትE","ቴ");
  tv = tv.replace("ትo","ቶ");
  
  tv = tv.replace("v","ቭ");
  tv = tv.replace("V","ቭ");
  tv = tv.replace("ቭe","ቨ");
  tv = tv.replace("ቭu","ቩ");
  tv = tv.replace("ቭi","ቪ");
  tv = tv.replace("ቭa","ቫ");
    tv = tv.replace("ቩa","ቯ");//_ua
  tv = tv.replace("ቪe","ቬ");
    tv = tv.replace("ቭE","ቬ");
  tv = tv.replace("ቭo","ቮ");
  
  tv = tv.replace("w","ው");
  tv = tv.replace("W","ው");
  tv = tv.replace("ውe","ወ");
  tv = tv.replace("ውu","ዉ");
  tv = tv.replace("ውi","ዊ");
  tv = tv.replace("ውa","ዋ");
  tv = tv.replace("ዊe","ዌ");
    tv = tv.replace("ውE","ዌ");
  tv = tv.replace("ውo","ዎ");
  
  tv = tv.replace("x","ሽ");
  tv = tv.replace("X","ሽ");
  tv = tv.replace("ሽe","ሸ");
  tv = tv.replace("ሽu","ሹ");
  tv = tv.replace("ሽi","ሺ");
  tv = tv.replace("ሽa","ሻ");
    tv = tv.replace("ሹa","ሿ");//_ua
  tv = tv.replace("ሺe","ሼ");
    tv = tv.replace("ሽE","ሼ");
  tv = tv.replace("ሽo","ሾ");
  
  tv = tv.replace("y","ይ");
  tv = tv.replace("Y","ይ");
  tv = tv.replace("ይe","የ");
  tv = tv.replace("ይu","ዩ");
  tv = tv.replace("ይi","ዪ");
  tv = tv.replace("ይa","ያ");
  tv = tv.replace("ዪe","ዬ");
    tv = tv.replace("ይE","ዬ");
  tv = tv.replace("ይo","ዮ");
  
  tv = tv.replace("z","ዝ");
  tv = tv.replace("ዝe","ዘ");
  tv = tv.replace("ዝu","ዙ");
  tv = tv.replace("ዝi","ዚ");
  tv = tv.replace("ዝa","ዛ");
    tv = tv.replace("ዙa","ዟ");//_ua
  tv = tv.replace("ዚe","ዜ");
    tv = tv.replace("ዝE","ዜ");
  tv = tv.replace("ዝo","ዞ");


  tv = tv.replace("C","ጭ");
  tv = tv.replace("ጭe","ጨ");
  tv = tv.replace("ጭu","ጩ");
  tv = tv.replace("ጭi","ጪ");
  tv = tv.replace("ጭa","ጫ");
    tv = tv.replace("ጩa","ጯ");//_ua
  tv = tv.replace("ጪe","ጬ");
    tv = tv.replace("ጭE","ጬ");
  tv = tv.replace("ጭo","ጮ");
  
  //tv = tv.replace("H","ሕ");
  //tv = tv.replace("ሕa","ሐ");
  //tv = tv.replace("ሕu","ሑ");
  //tv = tv.replace("ሕi","ሒ");
  //tv = tv.replace("ሕA","ሓ");
    //tv = tv.replace("ዱa","ዷ");//_ua
  //tv = tv.replace("ሒe","ሔ");
    //tv = tv.replace("ሕE","ሔ");
  //tv = tv.replace("ሕo","ሖ");
  
  tv = tv.replace("N","ኝ");
  tv = tv.replace("ኝe","ኘ");
  tv = tv.replace("ኝu","ኙ");
  tv = tv.replace("ኝi","ኚ");
  tv = tv.replace("ኝa","ኛ");
    tv = tv.replace("ኙa","ኟ");//_ua
  tv = tv.replace("ኚe","ኜ");
    tv = tv.replace("ኝE","ኜ");
  tv = tv.replace("ኝo","ኞ");

  tv = tv.replace("P","ጵ");
  tv = tv.replace("ጵe","ጰ");
  tv = tv.replace("ጵu","ጱ");
  tv = tv.replace("ጵi","ጲ");
  tv = tv.replace("ጵa","ጳ");
    tv = tv.replace("ጱa","ጷ");//_ua
  tv = tv.replace("ጲe","ጴ");
    tv = tv.replace("ጵE","ጴ");
  tv = tv.replace("ጵo","ጶ");
  
  tv = tv.replace("S","ፅ");
  tv = tv.replace("ፅe","ፀ");
  tv = tv.replace("ፅu","ፁ");
  tv = tv.replace("ፅi","ፂ");
  tv = tv.replace("ፅa","ፃ");
    tv = tv.replace("ፁa","ጿ");//_ua
  tv = tv.replace("ፂe","ፄ");
    tv = tv.replace("ፅE","ፄ");
  tv = tv.replace("ፅo","ፆ");
  
  tv = tv.replace("T","ጥ");
  tv = tv.replace("ጥe","ጠ");
  tv = tv.replace("ጥu","ጡ");
  tv = tv.replace("ጥi","ጢ");
  tv = tv.replace("ጥa","ጣ");
    tv = tv.replace("ጡa","ጧ");//_ua
  tv = tv.replace("ጢe","ጤ");
    tv = tv.replace("ጥE","ጤ");
  tv = tv.replace("ጥo","ጦ");
  
  tv = tv.replace("Z","ዥ");
  tv = tv.replace("ዥe","ዠ");
  tv = tv.replace("ዥu","ዡ");
  tv = tv.replace("ዥi","ዢ");
  tv = tv.replace("ዥa","ዣ");
    tv = tv.replace("ዡa","ዧ");//_ua
  tv = tv.replace("ዢe","ዤ");
    tv = tv.replace("ዥE","ዤ");
  tv = tv.replace("ዥo","ዦ");

  tv = tv.replace("እe","ኧ");
  tv = tv.replace("ኢe","ኤ");
  tv = tv.replace("a","አ");
  tv = tv.replace("A","አ");
  tv = tv.replace("u","ኡ");
  tv = tv.replace("U","ኡ");
  tv = tv.replace("i","ኢ");
  tv = tv.replace("I","ኢ");
  //tv = tv.replace("A","ኣ");
    tv = tv.replace("E","ኤ");
  tv = tv.replace("o","ኦ");
  tv = tv.replace("O","ኦ");
  tv = tv.replace("e","እ");
  
  //tv = tv.replace("'","'");
  //tv = tv.replace("''","\"");
  //tv = tv.replace("'e","እ");
  //tv = tv.replace("'u","ኡ");
  //tv = tv.replace("'i","ኢ");
  //tv = tv.replace("'a","አ");
  //tv = tv.replace("'ኢe","ኤ");
  //  tv = tv.replace("'E","ኤ");
  //tv = tv.replace("'o","ኦ");
  //tv = tv.replace("'እe","ኧ");

	tv = tv.replace("'","'");
  tv = tv.replace("''","\"");
  tv = tv.replace("'እ","እ");
  tv = tv.replace("'ኡ","ኡ");
  tv = tv.replace("'ኢ","ኢ");
  tv = tv.replace("'አ","አ");
  tv = tv.replace("'ኢe","ኤ");
    tv = tv.replace("'ኤ","ኤ");
  tv = tv.replace("'ኦ","ኦ");
  tv = tv.replace("'እe","ኧ");

	
  //------words------------------
  
  tv = tv.replace("እግዚአብሄር","እግዚአብሔር");
  tv = tv.replace("እግዚ/ር","እግዚአብሔር ");
  tv = tv.replace("እየሱስ","ኢየሱስ");
  tv = tv.replace("እረ ","ኧረ ");
  tv = tv.replace("እየሩሳሌም","ኢየሩሳሌም");
  tv = tv.replace("እያሱ","ኢያሱ");
  tv = tv.replace("አእምሮ","አይምሮ");
  tv = tv.replace("ሃ","ሀ");
  tv = tv.replace("ሑ","ሁ");
  tv = tv.replace("ሒ","ሂ");
  tv = tv.replace("ሕ","ህ");
  tv = tv.replace("ሖ","ሆ");
  tv = tv.replace("ኃ","ሀ");
  tv = tv.replace("ሠ","ሰ");
  tv = tv.replace("ሡ","ሱ");
  tv = tv.replace("ሢ","ሲ");
  tv = tv.replace("ሣ","ሳ");
  tv = tv.replace("ሤ","ሴ");
  tv = tv.replace("ሥ","ስ");
  tv = tv.replace("ሦ","ሶ");
  tv = tv.replace("ጸ","ፀ");
  tv = tv.replace("ጹ","ፁ");
  tv = tv.replace("ጺ","ፂ");
  tv = tv.replace("ጻ","ፃ");
  tv = tv.replace("ጼ","ፄ");
  tv = tv.replace("ጽ","ፅ");
  tv = tv.replace("ጾ","ፆ");
  tv = tv.replace("ዐ","አ");
  tv = tv.replace("ዑ","ኡ");
  tv = tv.replace("ዒ","ኢ");
  tv = tv.replace("ዓ","አ");
  tv = tv.replace("ዔ","ኤ");
  tv = tv.replace("ዕ","እ");
  tv = tv.replace("ዖ","ኦ");
  tv = tv.replace(";","፤");
  tv = tv.replace("',","፥");
  tv = tv.replace("፥,","፣");
  tv = tv.replace(":","፡");
  tv = tv.replace("፡፡","።");
  
  return tv;

}

function toggle_display(id)
{
	var id = id;
  var element = document.getElementById(id);
  var disp = element.style.display;
	if(disp!="none")
	{
		element.style.display = "none";
	}
	else
	{
		element.style.display = "";
		element.style.position = "absolute";
		element.style.margin = "0px";
		element.align = "center";
		element.style.top = "50px";
	}
	
}

function hide_help_table(id)
{
	var id = id;
  var element = document.getElementById(id);
  var disp = element.style.display;
	if(disp!="none")
	{
		element.style.display = "none";
	}
}

function clear_field(id)
{
	var id = id;
  var element = document.getElementById(id);
	
	element.value = "";
}

function select_all(id)
{
	var id = id;
  var element = document.getElementById(id);
	element.selectionStart = 0;
  element.selectionEnd = element.value.length; 
}

function yell()
{
	alert("Hi, This is a Test");
}
