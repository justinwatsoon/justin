   <!-- /*read more script start here */-->
   
      posts_no_thumb_sum = 400;
posts_thumb_sum = 300;
img_thumb_height = 160;
img_thumb_width = 180;


function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID, pURL, pTITLE){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = posts_no_thumb_sum;
if(img.length>=1) {
imgtag = "";'<span class="posts-thumb" style="float:right; margin-left: 10px;"><a href="'+ pURL +'" title="'+ pTITLE+'"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px" /></a></span>';
summ = posts_thumb_sum;
}
var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
div.innerHTML = summary;
}

  <!--  /*read more script end here */-->
    
  


var no_image = "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
var month_format = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var more_text = "اظهار الكل";
var postperpage = 8;
var related_number = 3;
var comments_text = "<span>Post </span>Comment";
var pagenav_prev = "Previous";
var pagenav_next = "Next";
