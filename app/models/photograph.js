import DS from 'ember-data';

let Photograph = DS.Model.extend({
  user: DS.attr('string'),
  imageUrl: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  caption: DS.attr('string'),
  filter: DS.attr('string')
});

Photograph.reopenClass({
  FIXTURES: [
    {
        "caption": "Probably one of the cutest things you'll see today. I think he liked the cake!",
        "filter": "Ludwig",
        "id": "919013127248009267_30645629",
        "imageUrl": "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10986250_390452874456523_1992416512_n.jpg",
        "thumbnailUrl": "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/10986250_390452874456523_1992416512_n.jpg",
        "user": "jessgoulding"
    },
    {
        "caption": "Learning about arrays and hashes with arts and crafts time @turingschool",
        "filter": "Normal",
        "id": "918164984900369089_8103085",
        "imageUrl": "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10963906_930225693684439_178710447_n.jpg",
        "thumbnailUrl": "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/10963906_930225693684439_178710447_n.jpg",
        "user": "tleskin"
    },
    {
        "caption": "We rock",
        "filter": "Sutro",
        "id": "853108204574094260_1560836803",
        "imageUrl": "http://scontent-a.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10544301_1502273723376887_1674884369_n.jpg",
        "thumbnailUrl": "http://scontent-a.cdninstagram.com/hphotos-xfp1/t51.2885-15/s150x150/e15/10544301_1502273723376887_1674884369_n.jpg",
        "user": "timandcami"
    },
    {
        "caption": "#FueledByCakepops",
        "filter": "Rise",
        "id": "845914890486810905_1546672945",
        "imageUrl": "http://scontent-a.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10731499_289061617969514_1865104407_n.jpg",
        "thumbnailUrl": "http://scontent-a.cdninstagram.com/hphotos-xpa1/t51.2885-15/s150x150/e15/10731499_289061617969514_1865104407_n.jpg",
        "user": "notfakemarc"
    },
    {
        "caption": "Rolando goes hard in the paint for #DSA morning meetups",
        "filter": "Hefe",
        "id": "843492762110003274_1546672945",
        "imageUrl": "http://scontent-b.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10731669_937281106286155_1849634485_n.jpg",
        "thumbnailUrl": "http://scontent-b.cdninstagram.com/hphotos-xap1/t51.2885-15/s150x150/e15/10731669_937281106286155_1849634485_n.jpg",
        "user": "notfakemarc"
    }
  ]
});

export default Photograph;