export default function() {
  this.get('/api/videos', function() {
    return {
      videos: [
        {
          id: 1,
          name: 'Jesus Fernandez Bones video part',
          cover: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11240718_1442937302685265_811948162_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xaf1/t50.2886-16/11229028_966460406711103_1363911861_n.mp4'
        },
        {
          id: 2,
          name: 'Shaunhover flatground tricks',
          cover: 'https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11258053_1586107534976447_1284903766_n.jpg',
          src: 'https://igcdn-videos-e-19-a.akamaihd.net/hphotos-ak-xfa1/t50.2886-16/11229035_971906422833059_1407736680_n.mp4'
        },
        {
          id: 3,
          name: 'Nice trick☛ @niilonikkanen',
          cover: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11236122_949022468483003_43650478_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xaf1/t50.2886-16/11250376_882414788482009_1950791821_n.mp4'
        },
        {
          id: 4,
          name: 'Christian Sanchez mira mira tricks',
          cover: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11246926_1468058723485996_1327045361_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xaf1/t50.2886-16/11214786_367446683463254_1504692181_n.mp4'
        },
        {
          id: 5,
          name: 'Some macba fun',
          cover: 'https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11232859_473250199498586_813102419_n.jpg',
          src: 'https://igcdn-videos-g-2-a.akamaihd.net/hphotos-ak-xaf1/t50.2886-16/11214516_482754115234202_74106415_n.mp4'
        },
        {
          id: 6,
          name: 'Fran Molina has pop!',
          cover: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xap1/t51.2885-15/11201658_772833612829916_161248747_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xaf1/t50.2886-16/11237361_808967109193656_713752479_n.mp4'
        },
        {
          id: 7,
          name: 'Here☛ @timmyjammz 🎬From @codycepeda 👐 #TCMT #dewtourPUSH',
          cover: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11236284_670295223098984_561746941_n.jpg',
          src: 'https://igcdn-videos-a-11-a.akamaihd.net/hphotos-ak-xfa1/t50.2886-16/11214803_1389923104669291_204317956_n.mp4'
        },
        {
          id: 8,
          name: 'Xavi Benguerel #tbt',
          cover: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-15/11190875_357858841080368_608102022_n.jpg',
          src: 'https://igcdn-videos-a-5-a.akamaihd.net/hphotos-ak-xaf1/t50.2886-16/11214399_427659494081125_915157407_n.mp4'
        },
        {
          id: 9,
          name: 'Some tricks at #Barceloneta',
          cover: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-15/11208533_756981704416072_1857171790_n.jpg',
          src: 'https://igcdn-videos-e-4-a.akamaihd.net/hphotos-ak-xaf1/t50.2886-16/11213139_878344518874004_231906001_n.mp4'
        },
        {
          id: 10,
          name: '@maxgeronzi 😃👐 @vincentjugnet🎥 #GYPSYLIFEFLASHBACK #BarcelonaSkateboarding',
          cover: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-15/11184617_807866679291353_1531308800_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xap1/t50.2886-16/11200527_879632998756750_1140061383_n.mp4'
        },
        {
          id: 11,
          name: '@alexrisvad @bjarnetjoetta 🎥@marcusmvik #BarcelonaSkateboarding 🚩________________________',
          cover: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-15/11189570_1479944738892940_406477549_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xaf1/t50.2886-16/11214838_438545152974831_1098425410_n.mp4'
        },
        {
          id: 12,
          name: '#classiceurolines @gunzzz Follow @freeskatemag 4 more 🎬!! 👌',
          cover: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/t51.2885-15/11176299_853704778057288_715903679_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xfp1/t50.2886-16/11166331_936089149776356_1225423011_n.mp4'
        },
        {
          id: 13,
          name: '#Macba @danilebron 💥 @freeskatemag',
          cover: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xap1/t51.2885-15/11195670_1444025915891020_783279164_n.jpg',
          src: 'https://igcdn-videos-a-19-a.akamaihd.net/hphotos-ak-xaf1/t50.2886-16/11200122_487367734754739_1823217840_n.mp4'
        },
        {
          id: 14,
          name: 'Check out the link in our BIO FACE to FACE @cristian_vannella @raulelegantesk8 https://youtu.be/x1gfJkJUsZk',
          cover: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-15/11186864_982222645122190_1242759630_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xaf1/t50.2886-16/11214627_1586862201591504_210124016_n.mp4'
        },
        {
          id: 15,
          name: '@codycepeda at #Macba @timmyjammz',
          cover: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-15/11189267_622037111265444_117701416_n.jpg',
          src: 'https://igcdn-videos-d-1-a.akamaihd.net/hphotos-ak-xfp1/t50.2886-16/11200153_994706877230141_1229295035_n.mp4'
        },
        {
          id: 16,
          name: 'Tricks by @oldirty_jc 👊 🎥@urielbru',
          cover: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/t51.2885-15/11199391_1402362540087288_814405091_n.jpg',
          src: 'https://igcdn-videos-d-18-a.akamaihd.net/hphotos-ak-xft1/t50.2886-16/11198230_897494700307918_78166513_n.mp4'
        },
        {
          id: 17,
          name: 'Line by @fernanorigel👌',
          cover: 'https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xap1/t51.2885-15/11202496_421324898048933_2071136041_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xpa1/t50.2886-16/11198057_988824967796781_1525331867_n.mp4'
        },
        {
          id: 18,
          name: 'The last #Batb7 champion @codycepeda is at #Macba , in this vid some tricks with our big friend',
          cover: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-15/11208112_615364985265427_638142858_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xpa1/t50.2886-16/11175478_698173683641772_446970552_n.mp4'
        },
        {
          id: 19,
          name: 'In vid 👉@marcioroberto__ 🎥@favelasktsurf 🏾- #Line at #Macba',
          cover: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xap1/t51.2885-15/11189637_1815078358717852_295589519_n.jpg',
          src: 'https://scontent-mad1-1.cdninstagram.com/hphotos-xtp1/t50.2886-16/11190603_423545767820667_1472913789_n.mp4'
        },
        {
          id: 20,
          name: '#Tbt C.Z. @zarazua1987 👌 🎥 @manu04star #VX1000',
          cover: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xap1/t51.2885-15/11190870_1440263502953412_1354603873_n.jpg',
          src: 'https://igcdn-videos-a-9-a.akamaihd.net/hphotos-ak-xap1/t50.2886-16/11199042_806030246150569_340136687_n.mp4'
        }
      ]
    }
  });
}