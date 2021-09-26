$('.theham').click(function(){
	if($('.themenus').hasClass('menuons')){
		$('.themenus').removeClass('menuons');
	}else{
		$('.themenus').addClass('menuons');
	}

});

$(document).ready(function(){
	$("#mygallery").justifiedGallery({
    rowHeight : 200,
    lastRow : 'nojustify',
    margins : 15
	});
	$('.ho').colorbox(colorboxConf);
}); //doecument END;
var personal_info = [
	{name:'', desc:''},
	{name:'Lee Nagyung', 
	desc:`
		Position: Lead Vocalist, Visual<br>
		Birthday: June 1, 2000<br>
		Zodiac Sign: Gemini<br>
		Height: 159 cm (5’2″)<br>
		Weight: 42 kg (92 lbs)<br>
		Blood Type: A<br>
		Instagram: @na.gyung61<br>
	`, 
	img:'profiles/from9-profile-nagyung.jpg', initial:'N'},
	{name:'Kim Saerom', 
	desc:`Position: Team Captain (term used for Leader), Lead Dancer, Vocalist, Rapper, Visual<br>
		Birthday: January 7, 1997<br>
		Zodiac Sign: Capricorn<br>
		Height: 163 cm (5’3″)<br>
		Blood Type: B<br>
		Instagram: @_leesaerom`,
	img:'profiles/from9-profile-saerom.jpg', initial:'S'},
	{name:'Jang Gyuri',
	desc:`Position: Lead Vocalist, Face of The Group<br>
		Birthday: December 27, 1997<br>
		Zodiac Sign: Capricorn<br>
		Height: 168 cm (5’6″)<br>
		Weight: 51 kg (112 lbs)<br>
		Blood Type: B<br>
		Instagram: @gyul.97`, 
	img:'profiles/from9-profile-gyuri.jpg', initial:'G'},		
	{name:'Baek Jiheon', 
		desc:`Position: Vocalist, Maknae<br>
		Birthday: April 17, 2003<br>
		Zodiac Sign: Aries<br>
		Height: 165 cm (5’5″)<br>
		Blood Type: B<br>
		Instagram: @jiheon___0417`,
	 img:'profiles/from9-profile-jiheon.jpg', initial:'J'},
	{name:'Roh Jisun', 
		desc:`Position: Vocalist, Center<br>
		Birthday: November 23, 1998<br>
		Zodiac Sign: Sagittarius<br>
		Height: 158 cm (5’2″)<br>
		Blood Type: B<br>
		Instagram: @rosee_sun`,
		img:'profiles/from9-profile-jisun.jpg', initial:'J'},
	{name:'Kim Seoyeon', 
		desc:`Position: Main Rapper, Lead Vocalist, Lead Dancer<br>
			Birthday: January 22, 2000<br>
			Zodiac Sign: Aquarius<br>
			Height: 157 cm (5’1″)<br>
			Weight: 47 kg (104 lbs)<br>
			Blood Type: A`,
		img:'profiles/from9-profile-seoyeon.jpg', initial:'S'},
	{name:'Lee Chaeyoung', 
		desc:`Position: Main Dancer, Lead Rapper, Vocalist<br>
			Birthday: May 14, 2000<br>
			Zodiac Sign: Taurus<br>
			Height: 169 cm (5’7″)<br>
			Weight: 54 kg (119 lbs)<br>
			Blood Type: B<br>
			Instagram: @chae_young_fm`,
		img:'profiles/from9-profile-chaeyoung.jpg', initial:'C'},
	{name:'Song Hayoung', 
		desc:`Position: Vice-Captain, Main Vocalist, Main Dancer<br>
			Birthday: September 29, 1997<br>
			Zodiac Sign: Libra<br>
			Height: 165 cm (5’5″)<br>
			Weight: 45.6 kg (100 lbs)<br>
			Blood Type: A<br>
			Instagram: @song_hyhy`, 
		img:'profiles/from9-profile-hayoung.jpg', initial:'H'},		
	{name:'Park Jiwon', 
		desc:`Position: Main Vocalist<br>
			Birthday: March 20, 1998<br>
			Height: 158 cm (5’2″)<br>
			Zodiac Sign: Pisces<br>
			Blood Type: A`, 
		img:'profiles/from9-profile-jiwon.jpg', initial:'J'}	
];

var themode = false;
$('.profile-person').mouseenter(function(){
	var theleft = $(this).position().left;
	var thetop =  $(this).position().top + 145;
	var thename = $(this).data('name');
	var response = "<h6>"+ thename + "</h6>"
	$('.select-bar').css({
		left: theleft,
	});
	$('.select-bar').html(response);
});


$('.profile-person').click(function(){
	personal_on();
	var thenum = $(this).data('num');
	get_person(thenum);
});

$('.close-btn').live("click", function(){
	personal_off();
});

$('.linkfromis').click(function(){	
	work_menu();
	fromis_on();
});
$('.linkdisc').click(function(){
	work_menu();
	disc_on();
});
$('.linkgallery').click(function(){
work_menu();
	gallery_on();
});
$('.close-btn-disc').live("click", function(){
	fromis_on();
});
$('.close-btn-gallery').live("click", function(){
	fromis_on();
});

function get_person(num){
	var thename = personal_info[num].name;
	var thedesc = personal_info[num].desc;
	var imgadd = personal_info[num].img;
	var initial = personal_info[num].initial;
	var theresponse = `<div class="theback">${initial}</div><h2>${thename}</h2><p>${thedesc}</p><div class="closing"><i class="fas fa-plus close-btn"></i></div>`;
	var theimg =`<img src="${imgadd}">`;
	$('.profile-desc').html(theresponse);	
	$('.profile-img').html(theimg);
}

function remove_pages(){
	if($('.wrap-2').hasClass('mode-on-two')){
		$('.wrap-2').removeClass('mode-on-two');
	}
	if($('.wrap-3').hasClass('mode-on-two')){
		$('.wrap-3').removeClass('mode-on-two');
	}
	if($('.wrap-4').hasClass('mode-on-two')){
		$('.wrap-4').removeClass('mode-on-two');
	}
	if($('.linkfromis').hasClass('theon')){
		$('.linkfromis').removeClass('theon');
	}
	if($('.linkdisc').hasClass('theon')){
		$('.linkdisc').removeClass('theon');
	}
	if($('.linkgallery').hasClass('theon')){
		$('.linkgallery').removeClass('theon');
	}		
}

function fromis_on(){
	if(themode){
		themode = false;
	}
	if($('.wrap-1').hasClass('mode-on')){
		$('.wrap-1').removeClass('mode-on');
	}
	if($('.lang-wrap').hasClass('moveon')){
		$('.lang-wrap').removeClass('moveon');
		$('.thelang').removeClass('theclear');	
	}
	remove_pages();
	$('.linkfromis').addClass('theon');			
}

function disc_on(){
	remove_pages();
	if(themode){
		$('.wrap-3').addClass('mode-on-two');	
	}else{
		$('.wrap-1').addClass('mode-on');
		$('.wrap-3').addClass('mode-on-two');	
		$('.lang-wrap').addClass('moveon');		
		$('.thelang').addClass('theclear');	
	}
	$('.linkdisc').addClass('theon');			
}

function gallery_on(){
	remove_pages();
	if(themode){
		$('.wrap-4').addClass('mode-on-two');	
	}else{
		$('.wrap-1').addClass('mode-on');
		$('.wrap-4').addClass('mode-on-two');	
		$('.lang-wrap').addClass('moveon');		
		$('.thelang').addClass('theclear');	
	}
	$('.linkgallery').addClass('theon');
}
				
function personal_on(){
	$('.wrap-1').addClass('mode-on');
	$('.wrap-2').addClass('mode-on-two');	
	$('.lang-wrap').addClass('moveon');
	$('.thelang').addClass('theclear');	

	themode = true;	
}
function personal_off(){
	$('.wrap-1').removeClass('mode-on');
	$('.wrap-2').removeClass('mode-on-two');	
	$('.lang-wrap').removeClass('moveon');
	$('.thelang').removeClass('theclear');	
	themode = false;	
}

function work_menu(){
	if($('.themenus').hasClass('menuons')){
		$('.themenus').removeClass('menuons');
	}
}

$( document ).on( "mousemove", function(event) {
  $( ".btn" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  if(themode){
	  var cross = event.pageX / 3 - 50;
	  $('.thelang').css({
	  	right: cross,
	  });  	
  }else{
	  var cross = event.pageX / 3 - 50;
	  $('.thelang').css({
	  	right: cross,
	  });  	
  }
});


//Album next-prev part
var current_album = 0;
var albumInfo = [
	{'title':'From.9', 
		'desc':`From.9 is the first and special single album of the South Korean girl group, Fromis 9. The album was released on October 10, 2018 by Off the Record Entertainment and distributed by Stone Music Entertainment and Genie Music. The album's lead single is "Love Bomb".
			<br><br>
			From.9 marks the first comeback of the group with Jang Gyu-ri after her absence due to participating in Produce 48.`,
		'img':'from9-cover-art.jpg', 'youtube':'-SK6cvkK4c0',
		'credit':`
			[Credit]<br>
			01. "Love Bomb" [Title]<br>
			Lyrics - Cho<br>
			Music - May Wakisaka | Sean Alexander | David Amber<br>
			Arrangement - David Amber | AVENUE 52<br>
			<br>
			02. "Dancing Queen"<br>
			Lyrics - EJO<br>
			Music - EJO | 1Hz | Kyum | LYK<br>
			Arrangement - 1Hz | Kyum<br><br>

			03.	"Colored" (물들어 / muldeul-eo)<br>
			Lyrics - Lee Seo-yeon정윤화<br>
			Music - Jamie Song<br>
			Arrangement - Jamie Song

		`
	},
	{'title':'To.Day',
	'desc':`
		To. Day is the second EP of South Korean girl group Fromis 9. The mini-album was released on June 5, 2018 with the title track, "DKDK (두근두근)". Member Jang Gyu-ri was not involved in the album due to her participation in Produce 48.
	`,
	'img':'today-cover-art.jpg', 'youtube':'B3KuJqe3Epg',
		'credit':`
			[Credit]<br>
			01. "Want to Get Closer"<br>
			Lyrics: Lee Sae-romSong, Ha-youngPark, Ji-wonRoh, Ji-sunLee, Seo-yeonLee, Chae-youngLee, Na-gyungBaek, Ji-heon<br>
			Music:TAK<br>
			Arrangement: TAK<br><br>

			02. "Follow You, To You"<br>
			Lyrics: TAKARRAN, 1Take<br>
			Music: TAKARRAN, 1Take<br>
			Arrangement: TAK<br><br>

			03. "DKDK"<br>
			Lyrics: 백곰,빼꼼,Song Ha-youngPark, Ji-wonLee, Seo-yeon<br>
			Music: 백곰,박기태 (PRISMFILTER)<br>
			Arrangement: 백곰,Anchor (PRISMFILTER),박기태 (PRISMFILTER)<br><br>

			04. "22nd Century Girl"<br>
			Lyrics: 달리<br>
			Music: Wonderkid, Breadbeat, 신쿵<br>
			Arrangement: WonderkidBreadbeat신쿵<br><br>

			05. "Clover"<br>
			Lyrics: Iggy, Youngbae<br>
			Music: Iggy, Youngbae<br>
			Arrangement: Iggy, Youngbae<br><br>

			06. "First Love"<br>
			Lyrics: Iggy, Youngbae<br>
			Music: Iggy,Youngbae<br>
			Arrangement: IggyYoungbae
		`
},
	{'title':'To.Heart', 
		'desc':`
			To. Heart is the first and debut EP of the South Korean girl group Fromis 9 under Stone Music Entertainment. The mini-album was released on January 24, 2018 with the title track, "To Heart".
		`, 
		'img':'fromis-cover-art-to-heart.jpg', 'youtube':'iFUHS1Ei7qw',
		'credit':`
			[Credit]<br>
			01. "The Way To Me"<br>
			Lyrics: fromis_9<br>
			Music: TAK<br>
			Arrangement: TAK<br><br>
			02. "To Heart"<br>
			Lyrics: Iggy Youngbae<br>
			Music: Iggy Youngbae<br><br>
			03. "Miracle"<br>
			Lyrics: Dalli<br>
			Music: Wonderkid, BreadBeat, ATM<br>
			Arrangement: BreadBeat, ATM<br>
			04. "Pinocchio"<br><br>
			Lyrics: Dalli<br>
			Music: SlyBerry, 신쿵, 달리, Wonderkid<br>
			Arrangement: SlyBerry, 신쿵, Wonderkid<br><br>
			05. "Be With You"<br>
			Lyrics: 1Take, TAK<br>
			Music: 1Take, TAK<br>
			Arrangement: 1Take, TAK<br><br>
			06. "Glass Shoes (MAMA Ver.)<br>
			Lyrics: BUMZU<br>
			Music: Anchor, Sophiya, Kyulkyung, Yuha, Joe Michel<br>
			Arrangement: Anchor
		`
},
	{'title':'Glass Shoes',
	'desc':`
		On November 29, Fromis 9 performed their pre-debut single titled "Glass Shoes" at the 2017 Mnet Asian Music Awards in Japan. The song was released as a digital single the following day. They also performed the song on the December 15th episode of Music Bank, marking the group's first-ever appearance in a music program.
	`,
	'img':'fromis-cover-art-glass-shoes.jpg', 'youtube':'n2TtQYuFfWw',
		'credit':`
			[Credit]<br>
			01. "Love Bomb" [Title]<br>
			Lyrics - Cho<br>
			Music - May Wakisaka | Sean Alexander | David Amber<br>
			Arrangement - David Amber | AVENUE 52<br>
			<br><br>
			02. "Dancing Queen"<br>
			Lyrics - EJO<br>
			Music - EJO | 1Hz | Kyum | LYK<br>
			Arrangement - 1Hz | Kyum
		`
}
];

$('.album-next').click(function(){
	if(current_album == 3){
		current_album = 0;
	}else{
		current_album += 1;
	}

	var thenew = get_new_album(current_album);

	$('.album-wrap').addClass('disappear').delay(700).queue(function(){
		$('.album-wrap').html(thenew);
	   $(this).removeClass('disappear'); 
	   $(this).dequeue();
	});

	$('.album-text').addClass('disappear').delay(700).queue(function(){
		var album_title = albumInfo[current_album].title;
		var res = album_title.toUpperCase();
		$(this).html(`FROMIS_NINE  ${res}`);
	   $(this).removeClass('disappear'); 
	   $(this).dequeue();
	});

}); //album-next END;

$('.album-prev').click(function(){
	if(current_album == 0){
		current_album = 3;
	}else{
		current_album -= 1;
	}

	var thenew = get_new_album(current_album);

	$('.album-wrap').addClass('disappear').delay(700).queue(function(){
		$('.album-wrap').html(thenew);
	   $(this).removeClass('disappear'); 
	   $(this).dequeue();
	});

	$('.album-text').addClass('disappear').delay(700).queue(function(){
		var album_title = albumInfo[current_album].title;
		var res = album_title.toUpperCase();
		$(this).html(`FROMIS_NINE  ${res}`);
	   $(this).removeClass('disappear'); 
	   $(this).dequeue();
	});

}); //album-prev END;


function get_new_album(current_album){
	var album_title = albumInfo[current_album].title;
	var album_desc = albumInfo[current_album].desc;
	var album_cover = albumInfo[current_album].img;
	var album_youtube = albumInfo[current_album].youtube;
	var album_credit = albumInfo[current_album].credit;
	return `<img src="albums/${album_cover}" class="album-cover" />
	<div class="album-desc">	
	<h4>${album_title}</h4>
		<div class="album-para">
			<p>
				${album_desc}
			</p>
			<center>
				<iframe class="playmv"
				src="https://www.youtube.com/embed/${album_youtube}?mode=opaque&amp;rel=0&amp;autohide=0&amp;showinfo=1&amp;wmode=transparent;" frameborder="0" allowfullscreen>
				</iframe>
			</center>
			<p class="thecredit">
				${album_credit}
			</p>
		</div>
		<div class="thedeco"></div>				
		<div class="closing">
			<i class="fas fa-plus close-btn-disc"></i>
		</div>
	</div>`;	
} //get_new_album END;

