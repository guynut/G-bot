const Discord = require('discord.js');
const Twit = require('twit');

const twitterAuth = new Twit({
    consumer_key: 'yipanX0W6GTUmVeEvtSN51mFJ',
    consumer_secret: 'yndMwqG31ux7WHivokuPjy6TItjXnGO6y8MvFm37wUKo9mGBYY',
    access_token: '876025193533120512-ufyInRGCsF0Keza0vwu3ZV1zm1JAyDt',
    access_token_secret: 'mlS3vJQz7Rm6l1CZJXuFfMU1xhIivtLXpUrbxqOYmsOke'
  });
  
  const discordClient = new Discord.Client();
  const discordToken = '52c62f167fbe351cf47bb108908d09dff5fedd02f04b18dd076a40b1bda672fc';

discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}`);
});
  
discordClient.login(discordToken);
  
const stream = twitterAuth.stream('statuses/filter', { follow: ['@JAVThailand18'] });
// Replace 'USER_ID' with the Twitter user ID you want to monitor

stream.on('tweet', (tweet) => {
  // Process the tweet object and extract the desired information
  const { id_str, text, user } = tweet;

  // Send the tweet to a Discord channel
  const channel = discordClient.channels.cache.get('961603569637785620');
  // Replace 'DISCORD_CHANNEL_ID' with the ID of the Discord channel you want to send the tweet to

  channel.send(`New tweet from ${user.screen_name}: ${text}\nhttps://twitter.com/${user.screen_name}/status/${id_str}`);
});


