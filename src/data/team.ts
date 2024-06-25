import Jerome from '../assets/teams/jerome.png'
import Tomo from '../assets/teams/tomohiro.png'
import Yusuke from '../assets/teams/yusuke.png'
import Otsuka from '../assets/teams/otsuka.png'
import { Teams } from '../types/Teams/Teams'


export const teams: Teams[] = [
    {
        id: 1,
        name: 'Jerome Polin Sijabat',
        description: 'Jerome is widely known as the co-founder of Nihongo Mantappu YouTube channel, co-founder of Mantappu Corp, and Founder of Menantea Group who has established himself as a household name in Indonesia’s YouTube community. Through his channel, he shares his knowledge about Mathematics, Indonesia, and Japanese. He is a Mitsui Bussan scholarship awardee and graduated from Waseda University with GPA 4.00. He was featured in Forbes 30 under 30 Asia in 2021 alongside with his brother, Jehian Panangian Sijabat.',
        image: Jerome,
        socialMedia: {
            instagram: {
                link: 'https://www.instagram.com/jeromepolin/',
                icon: 'fa-brands fa-instagram'
            },
            twitter: {
                link: 'https://x.com/JeromePolin',
                icon: 'fa-brands fa-x-twitter'
            },
            youtube: {
                link: 'https://www.youtube.com/c/nihongomantappu/featured',
                icon: 'fa-brands fa-youtube'
            },
            tiktok: {
                link: 'https://www.tiktok.com/@jeromepolin98?lang=en',
                icon: 'fa-brands fa-tiktok'
            }
        },
        biodata: {
            fullName: 'Jerome Polin Sijabat',
            nickname: ['Jerome', 'Jer', 'Bang Jer'],
            dob: 'Jakarta, May 2nd 1998',
            nationality: 'Indonesian',
            height: '175 CM',
            zodiac: 'Taurus',
            religion: 'Christian',
            education: ['SMAN 5 Surabaya (Science)', 'Waseda University (Applied Mathematics)']
        }
    },
    {
        id: 2,
        name: 'Tomohiro Yamashita (山下智央)',
        description: 'Tomo is one of Waseda Boys members who won Bahasa Indonesia Speech Competition that was held at Kanda University. Now, he also creates his channel as a platform to share his knowledge about Japanese, daily vlogs, and explore Indonesian cuisine in Japan. On his channel, he’s delivering content using Bahasa Indonesia.',
        image: Tomo,
        socialMedia: {
            instagram: {
                link: 'https://www.instagram.com/tomoyama32/',
                icon: 'fa-brands fa-instagram'
            },
            twitter: {
                link: '',
                icon: 'fa-brands fa-x-twitter'
            },
            youtube: {
                link: 'https://www.youtube.com/channel/UCeUU7vUHjWpspihyRSE6cHA/featured',
                icon: 'fa-brands fa-youtube'
            },
            tiktok: {
                link: 'https://www.tiktok.com/@tomoyama3_2',
                icon: 'fa-brands fa-tiktok'
            }
        },
        biodata: {
            fullName: 'Tomohiro Yamashita (山下智央)',
            nickname: ['Tomo'],
            dob: 'Osaka Prefecture, January 11th 2000',
            nationality: 'Japanese',
            height: '178 CM',
            zodiac: 'Capricorn',
            religion: '-',
            education: ['Waseda University (Department Of Information Technology)']
        }
    },
    {
        id: 3,
        name: 'Yusuke Sakazaki (坂崎友亮)',
        description: 'Yusuke is one of Waseda Boys members. On his channel, he makes a vlog about daily life and Indonesian and Japanese cuisine. He often creates trending and entertaining videos on TikTok.',
        image: Yusuke,
        socialMedia: {
            instagram: {
                link: 'https://www.instagram.com/skzk_yusuke/',
                icon: 'fa-brands fa-instagram'
            },
            twitter: {
                link: '',
                icon: 'fa-brands fa-x-twitter'
            },
            youtube: {
                link: 'https://www.youtube.com/@SKZK_YUSUKE',
                icon: 'fa-brands fa-youtube'
            },
            tiktok: {
                link: 'https://www.tiktok.com/@skzk_yusuke524',
                icon: 'fa-brands fa-tiktok'
            }
        },
        biodata: {
            fullName: 'Yusuke Sakazaki (坂崎友亮)',
            nickname: ['Yusuke', 'Sebesty'],
            dob: 'Mie Prefecture, August 7th 1999',
            nationality: 'Japanese',
            height: '170 CM',
            zodiac: 'Leo',
            religion: '-',
            education: ['Waseda University (Department Of Electronic and Physical Systems)']
        }
    },
    {
        id: 4,
        name: 'Ryoma Otsuka (大塚稜馬)',
        description: "Otsuka is one of Waseda Boys member. He's a sporty and fashionable guy who has the “mysterious and cool” guy vibes.",
        image: Otsuka,
        socialMedia: {
            instagram: {
                link: 'https://www.instagram.com/otk_rym/',
                icon: 'fa-brands fa-instagram'
            },
            twitter: {
                link: '',
                icon: 'fa-brands fa-x-twitter'
            },
            youtube: {
                link: '',
                icon: 'fa-brands fa-youtube',
            },
            tiktok: {
                link: 'https://www.tiktok.com/@otk_rym743',
                icon: 'fa-brands fa-tiktok'
            }
        },
        biodata: {
            fullName: 'Ryoma Otsuka (大塚稜馬)',
            nickname: ['Ryoma', 'Otsuka'],
            dob: 'Fukuoka, October 19th 1999',
            nationality: 'Japanese',
            height: '165 CM',
            zodiac: 'Libra',
            religion: 'Christian',
            education: ['Kyushuu International University High School', 'Waseda University (Communications and Computer Engineering)']
        }
    }
]