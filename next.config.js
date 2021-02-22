const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withPlugins = require("next-compose-plugins");
const withImages = require('next-images');
const withOffline = require('next-offline');

const whiteListClass = () => {
    return [/^geosuggest/];
}

module.exports = withPlugins(
    [
    
        [withPurgeCss, {
            purgeCss: {
                whitelistPatterns: whiteListClass
            }
        }
        ],
        withCSS,
        withImages,
        withOffline,
    ],
    // {
    //     exportPathMap: function () {
    //         return {
    //             '/': { page: '/' },
    //             '/sign-in': { page: '/sign-in' },
    //             '/profile': { page: '/profile' },
    //             '/booking': { page: '/booking' },
    //             '/select-cab': { page: '/select-cab' },
    //             '/contact': { page: '/contact' }
    //         };
    //     }
    // }
)
