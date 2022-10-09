export const selectImage = (socialNet : string) => {
  switch (socialNet) {
    case 'facebook':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png';
    case 'twitter':
      return 'https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg';
    case 'instagram':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png';
    case 'linkedin':
      return 'https://cdn-icons-png.flaticon.com/512/355/355994.png';
    case 'youtube':
      return 'https://i.pinimg.com/originals/7d/c9/93/7dc993c70d4adba215b87cafdc59d82d.png';
    case 'tiktok':
      return 'https://cdn.pixabay.com/photo/2021/01/30/06/42/tiktok-5962992_1280.png';
    case 'pinterest':
      return 'https://graffica.info/wp-content/uploads/2017/08/badgeRGB.png';
    case 'twitch':
      return 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/twitch-512.png';
    default:
      return 'https://fedearroz.s3.amazonaws.com/static/assets/images/Fedearroz%20-%20no-image.png';
  }
}