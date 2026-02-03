/**
 * JoJo Timeline - Event Data
 * Complete timeline data extracted from grounding document
 */

const TIMELINE_EVENTS = {
    // Part 3: Stardust Crusaders
    'part-3': [
        {
            id: 'event-between-2-3',
            year: '1971-1987',
            type: 'normal',
            title: 'Between Parts 2 and 3',
            summary: 'Jotaro Kujo born 1971. DIO recovered from Atlantic Ocean in 1983. Stand Arrows discovered 1986.',
            details: [
                '1942: Holy Joestar born to Joseph and Suzi Q',
                '1971: Jotaro Kujo born to Holy and jazz musician Sadao Kujo',
                '1978: Stand virus discovered in Greenland rocks',
                '1983: DIO recovered from Atlantic after ~100 years',
                '1985: Giorno Giovanna born (DIO using Jonathan\'s body)',
                '1986: Diavolo discovers 6 Stand Arrows in Egypt, sells 5 to Enya',
                '1987: DIO awakens The World, all Joestars begin developing Stands'
            ],
            tags: [
                { type: 'character', name: 'DIO' },
                { type: 'character', name: 'Jotaro Kujo' },
                { type: 'item', name: 'Stand Arrow' }
            ]
        },
        {
            id: 'event-jotaro-stand',
            year: '1988',
            month: 'November',
            type: 'major',
            title: 'Jotaro Awakens Star Platinum',
            summary: 'Jotaro imprisons himself believing he\'s possessed. Joseph arrives from Cairo to explain Stands and DIO\'s resurrection.',
            details: [
                'Jotaro (age 17) believes he\'s possessed by an "evil spirit"',
                'Joseph arrives with Muhammad Avdol from Cairo',
                'Holy develops Stand illness - 50 days to live unless DIO is killed',
                'Noriaki Kakyoin freed from DIO\'s flesh bud, joins group',
                'Jean Pierre Polnareff freed and joins to hunt J. Geil'
            ],
            tags: [
                { type: 'character', name: 'Jotaro Kujo' },
                { type: 'character', name: 'Joseph Joestar' },
                { type: 'character', name: 'Holy Kujo' }
            ]
        },
        {
            id: 'event-50-day-journey',
            year: '1988',
            month: 'Nov-Jan',
            type: 'normal',
            title: 'The 50-Day Journey',
            summary: 'The Crusaders travel from Tokyo to Egypt, battling DIO\'s Stand-user assassins across Asia and the Middle East.',
            details: [
                'Route: Tokyo → Hong Kong → Singapore → India → Pakistan → Red Sea → Egypt',
                'Cannot fly directly due to DIO\'s worldwide network',
                'Avdol "dies" protecting Polnareff (secretly survives)',
                'Polnareff kills J. Geil with Kakyoin\'s help',
                'Iggy (Boston Terrier with The Fool) joins in Egypt'
            ],
            tags: [
                { type: 'character', name: 'Polnareff' },
                { type: 'character', name: 'Kakyoin' },
                { type: 'character', name: 'Avdol' },
                { type: 'character', name: 'Iggy' }
            ]
        },
        {
            id: 'event-dio-final',
            year: '1889',
            month: 'January 16',
            type: 'major',
            title: 'Final Battle at DIO\'s Mansion',
            summary: 'The Crusaders confront DIO in Cairo. Avdol, Iggy, and Kakyoin die. Jotaro defeats DIO with Star Platinum\'s time stop.',
            details: [
                'Muhammad Avdol killed instantly by Vanilla Ice\'s Cream',
                'Iggy dies after being brutally beaten by Vanilla Ice',
                'DIO\'s The World can stop time for 5-9 seconds',
                'Noriaki Kakyoin dies discovering The World\'s power',
                'Joseph temporarily dies after DIO drains his blood',
                'Jotaro discovers Star Platinum can also stop time (2 seconds)',
                'Star Platinum shatters The World and DIO\'s head',
                'Jotaro revives Joseph using DIO\'s blood'
            ],
            tags: [
                { type: 'character', name: 'DIO' },
                { type: 'character', name: 'Jotaro Kujo' },
                { type: 'character', name: 'Kakyoin' },
                { type: 'character', name: 'Avdol' },
                { type: 'character', name: 'Iggy' }
            ]
        },
        {
            id: 'event-jonathan-rest',
            year: '1889',
            month: 'January 17',
            type: 'major',
            title: 'Jonathan\'s Body Finally Rests',
            summary: 'At dawn, Jonathan Joestar\'s body (with DIO\'s remains) is exposed to sunlight - finally at rest after 100 years.',
            details: [
                'Holy makes full recovery',
                'Polnareff returns to France',
                'Joseph and Jotaro return to Japan',
                'Jonathan\'s body cremated after 100 years'
            ],
            tags: [
                { type: 'character', name: 'Jonathan Joestar' },
                { type: 'character', name: 'DIO' }
            ]
        }
    ],

    // Part 4: Diamond is Unbreakable
    'part-4': [
        {
            id: 'event-kira-first-murder',
            year: '1983',
            month: 'August 13',
            type: 'major',
            title: 'Yoshikage Kira\'s First Murder',
            summary: 'Kira (age 18) kills Reimi Sugimoto, her family, and dog Arnold. 4-year-old Rohan Kishibe is saved when Reimi throws him out a window.',
            details: [
                'Reimi Sugimoto (age 16) becomes a ghost haunting Morioh',
                'Kira later gains Killer Queen Stand from Arrow',
                'With Killer Queen, Kira can atomize evidence of murders',
                'Josuke Higashikata born same year (Joseph\'s illegitimate son)'
            ],
            tags: [
                { type: 'character', name: 'Yoshikage Kira' },
                { type: 'character', name: 'Reimi Sugimoto' },
                { type: 'character', name: 'Rohan Kishibe' }
            ]
        },
        {
            id: 'event-josuke-saved',
            year: '1987',
            month: 'Winter',
            type: 'normal',
            title: 'Josuke Saved by Mysterious Stranger',
            summary: '4-year-old Josuke develops critical fever from Stand awakening. A mysterious pompadour-wearing teenager saves him in a blizzard.',
            details: [
                'Fever caused by DIO\'s resurrection awakening his Stand',
                'Josuke models his iconic hairstyle after his savior',
                'The stranger\'s identity remains a mystery'
            ],
            tags: [
                { type: 'character', name: 'Josuke Higashikata' }
            ]
        },
        {
            id: 'event-jotaro-morioh',
            year: '1999',
            month: 'April',
            type: 'major',
            title: 'Jotaro Arrives in Morioh',
            summary: 'Jotaro Kujo (age 28) arrives in Morioh to inform Josuke of his parentage and warn about Stand users.',
            details: [
                'Josuke\'s grandfather Ryohei Higashikata killed by Angelo',
                'Introduction of Koichi Hirose and Okuyasu Nijimura',
                'Keicho Nijimura killed by Red Hot Chili Pepper',
                'Arrow activity creates more Stand users in Morioh'
            ],
            tags: [
                { type: 'character', name: 'Jotaro Kujo' },
                { type: 'character', name: 'Josuke Higashikata' },
                { type: 'character', name: 'Koichi Hirose' }
            ]
        },
        {
            id: 'event-joseph-morioh',
            year: '1999',
            month: 'Summer',
            type: 'normal',
            title: 'Joseph Joestar Visits Morioh',
            summary: 'Joseph (age 79) meets Josuke for first time. He adopts invisible baby Shizuka Joestar.',
            details: [
                'Morioh alliance forms: Josuke, Jotaro, Koichi, Okuyasu, Rohan',
                'Rohan Kishibe learns his connection to Reimi\'s murder',
                'Various Stand users emerge throughout summer'
            ],
            tags: [
                { type: 'character', name: 'Joseph Joestar' },
                { type: 'character', name: 'Shizuka Joestar' },
                { type: 'character', name: 'Rohan Kishibe' }
            ]
        },
        {
            id: 'event-shigechi-death',
            year: '1999',
            month: 'July',
            type: 'major',
            title: 'Shigechi Killed; Kira Escapes',
            summary: 'Shigechi accidentally discovers Kira\'s secret and is killed. Kira escapes by swapping faces with Kosaku Kawajiri.',
            details: [
                'Shigechi\'s death alerts the Morioh group to Kira\'s existence',
                'Kira cornered but uses Cinderella to swap identities',
                'Kira lives undercover with Kawajiri family',
                'Hayato Kawajiri discovers "father" is actually Kira'
            ],
            tags: [
                { type: 'character', name: 'Yoshikage Kira' },
                { type: 'character', name: 'Shigechi' }
            ]
        },
        {
            id: 'event-kira-death',
            year: '1999',
            month: 'Late Summer',
            type: 'major',
            title: 'Yoshikage Kira Killed',
            summary: 'Kira awakens Bites the Dust. Hayato tricks Kira into revealing himself. Kira is killed when an ambulance runs over his head.',
            details: [
                'Second Arrow piercing awakens Bites the Dust time-loop ability',
                'Rohan and others repeatedly killed in the loop',
                'Hayato breaks the loop by tricking Kira',
                'Combined efforts corner Kira in final battle',
                'Kira\'s ghost dragged away by spectral hands in ghost alley',
                'Reimi and Arnold finally ascend to afterlife'
            ],
            tags: [
                { type: 'character', name: 'Yoshikage Kira' },
                { type: 'character', name: 'Hayato Kawajiri' },
                { type: 'character', name: 'Reimi Sugimoto' }
            ]
        }
    ],

    // Part 5: Golden Wind
    'part-5': [
        {
            id: 'event-diavolo-born',
            year: '1967',
            type: 'normal',
            title: 'Diavolo Born',
            summary: 'Diavolo born in women\'s prison after 2-year pregnancy. Shares body with alternate personality Vinegar Doppio from birth.',
            details: [
                'Mysterious circumstances surround his birth',
                '~1984-1985: Diavolo has relationship with Donatella Una',
                '1985-1986: Trish Una born, Diavolo unaware',
                '1986: Diavolo founds Passione using Stand Arrow profits'
            ],
            tags: [
                { type: 'character', name: 'Diavolo' },
                { type: 'character', name: 'Doppio' }
            ]
        },
        {
            id: 'event-polnareff-crippled',
            year: '1999',
            type: 'normal',
            title: 'Polnareff Confronts Diavolo',
            summary: 'Jotaro and Polnareff investigate Stand Arrows. Polnareff confronts Diavolo and is severely crippled.',
            details: [
                'Polnareff\'s right eye gouged, arm severed, legs broken',
                'Polnareff survives and discovers another Arrow',
                'Begins planning to create Requiem Stand'
            ],
            tags: [
                { type: 'character', name: 'Polnareff' },
                { type: 'character', name: 'Diavolo' }
            ]
        },
        {
            id: 'event-giorno-naples',
            year: '2001',
            month: 'March 29-31',
            type: 'major',
            title: 'Giorno Joins Passione',
            summary: 'Giorno Giovanna (age 15) meets Bruno Bucciarati. They discover shared hatred for Passione\'s drug trade.',
            details: [
                'Koichi Hirose arrives in Naples on Jotaro\'s orders',
                'Giorno secretly kills Polpo to join Passione',
                'Bucciarati\'s team accepts Giorno',
                'Team assigned to protect Trish Una from La Squadra'
            ],
            tags: [
                { type: 'character', name: 'Giorno Giovanna' },
                { type: 'character', name: 'Bruno Bucciarati' },
                { type: 'character', name: 'Trish Una' }
            ]
        },
        {
            id: 'event-bucciarati-betrays',
            year: '2001',
            month: 'April',
            type: 'major',
            title: 'Bucciarati Betrays Passione',
            summary: 'At Venice, Diavolo attempts to kill Trish. Bucciarati betrays Passione to protect her, becoming fatally wounded.',
            details: [
                'Journey across Italy: Naples → Capri → Pompeii → Florence → Venice → Sardinia → Rome',
                'Risotto Nero killed battling Doppio',
                'Giorno grants Bucciarati "living death" to continue fighting',
                'Abbacchio killed by King Crimson'
            ],
            tags: [
                { type: 'character', name: 'Bruno Bucciarati' },
                { type: 'character', name: 'Diavolo' },
                { type: 'character', name: 'Abbacchio' }
            ]
        },
        {
            id: 'event-requiem',
            year: '2001',
            month: 'April',
            type: 'major',
            title: 'Gold Experience Requiem',
            summary: 'Polnareff killed at Rome Colosseum. Giorno awakens Gold Experience Requiem and defeats Diavolo with infinite death loop.',
            details: [
                'Chariot Requiem awakens, switches everyone\'s souls',
                'Polnareff\'s soul transfers into turtle Coco Jumbo',
                'Narancia Ghirga killed by King Crimson',
                'Gold Experience Requiem nullifies King Crimson\'s ability',
                'Diavolo condemned to dying repeatedly for eternity',
                'Giorno becomes new Boss of Passione at age 15'
            ],
            tags: [
                { type: 'character', name: 'Giorno Giovanna' },
                { type: 'character', name: 'Diavolo' },
                { type: 'character', name: 'Polnareff' },
                { type: 'character', name: 'Narancia' }
            ]
        }
    ],

    // Part 6: Stone Ocean
    'part-6': [
        {
            id: 'event-pucci-backstory',
            year: '1972-1988',
            type: 'normal',
            title: 'Enrico Pucci\'s Origin',
            summary: 'Pucci and twin Wes Bluemarine born 1972. Pucci meets DIO 1987, learns about "achieving Heaven."',
            details: [
                'A grieving woman swaps her dead baby with one Pucci twin',
                '1987: Young Pucci (age 15) meets DIO hiding in church',
                '1988: Tragedy with sister Perla leads to her suicide',
                'Stand Arrow pierces both Pucci (Whitesnake) and Wes (Weather Report)',
                'Pucci erases Wes\'s memories, creating amnesiac "Weather Report"'
            ],
            tags: [
                { type: 'character', name: 'Enrico Pucci' },
                { type: 'character', name: 'DIO' },
                { type: 'character', name: 'Weather Report' }
            ]
        },
        {
            id: 'event-jolyne-framed',
            year: '2011',
            month: 'October-November',
            type: 'major',
            title: 'Jolyne Framed and Imprisoned',
            summary: 'Jolyne Cujoh (age 19) framed for vehicular homicide by Pucci. Jotaro visits and has his Stand and Memory DISCs stolen.',
            details: [
                'Jolyne sentenced to 15 years at Green Dolphin Street Prison',
                'Jotaro (age 40) visits to warn Jolyne and attempt prison break',
                'Whitesnake steals Jotaro\'s Memory and Star Platinum DISCs',
                'Jotaro falls into coma',
                'Jolyne awakens Stone Free from Arrow fragment',
                'Alliance forms: Jolyne, Emporio, Ermes, Foo Fighters, Weather Report, Anasui'
            ],
            tags: [
                { type: 'character', name: 'Jolyne Cujoh' },
                { type: 'character', name: 'Jotaro Kujo' },
                { type: 'character', name: 'Enrico Pucci' }
            ]
        },
        {
            id: 'event-green-baby',
            year: '2011-2012',
            type: 'normal',
            title: 'The Green Baby',
            summary: 'Pucci uses DIO\'s bone to create the Green Baby homunculus. Whitesnake evolves into C-MOON.',
            details: [
                'Jotaro\'s Stand DISC recovered, sent to Speedwagon Foundation',
                'Foo Fighters destroyed protecting the team',
                'Pucci fuses with Green Baby',
                'Weather Report recovers his memories and full Stand power'
            ],
            tags: [
                { type: 'character', name: 'Enrico Pucci' },
                { type: 'character', name: 'Foo Fighters' }
            ]
        },
        {
            id: 'event-made-in-heaven',
            year: '2012',
            month: 'March',
            type: 'major',
            title: 'Universe Reset at Cape Canaveral',
            summary: 'Pucci achieves Made in Heaven. Time accelerates universally. Jotaro, Jolyne, Ermes, and Anasui are killed.',
            details: [
                'Weather Report killed by Pucci, passes Stand DISC to Emporio',
                'DIO\'s sons (Ungalo, Rikiel, Donatello Versus) all defeated',
                'Jotaro recovers and rejoins fight',
                'Jotaro killed protecting Jolyne (time-stop insufficient)',
                'Ermes and Anasui killed',
                'Jolyne sacrifices herself to allow Emporio to escape'
            ],
            tags: [
                { type: 'character', name: 'Enrico Pucci' },
                { type: 'character', name: 'Jotaro Kujo' },
                { type: 'character', name: 'Jolyne Cujoh' }
            ]
        },
        {
            id: 'event-ireneverse',
            year: '2012',
            type: 'major',
            title: 'The Ireneverse - Original Timeline Ends',
            summary: 'Emporio uses Weather Report\'s DISC to kill Pucci before cycle completes. New universe created free from Pucci\'s influence.',
            details: [
                'Emporio creates oxygen poisoning, immobilizing Pucci',
                'Pucci\'s death erases him from existence',
                'New timeline with alternate versions of characters:',
                'Irene (Jolyne\'s counterpart), Anakiss (Anasui\'s counterpart)',
                'The curse of DIO\'s legacy ends',
                'Original Joestar bloodline\'s story concludes'
            ],
            tags: [
                { type: 'character', name: 'Emporio Alniño' },
                { type: 'character', name: 'Irene' }
            ]
        }
    ],

    // Part 7: Steel Ball Run
    'part-7': [
        {
            id: 'event-johnny-backstory',
            year: '1872-1890',
            type: 'normal',
            title: 'Johnny Joestar\'s Tragic Past',
            summary: 'Johnny born 1872 in Kentucky. Brother Nicholas dies in accident. Johnny becomes famous jockey "Joe Kid" before being shot and paralyzed.',
            details: [
                'Family descended from former British aristocrats',
                'Father George II won Triple Crown 7 times',
                'Johnny kept pet mouse Danny; father ordered it drowned',
                'Nicholas dies falling from horse (seemingly startled by Danny)',
                'Johnny becomes guilt-ridden, believes he deserved punishment',
                'Paralyzed after cutting in line at theater leads to shooting'
            ],
            tags: [
                { type: 'character', name: 'Johnny Joestar' },
                { type: 'location', name: 'Kentucky' }
            ]
        },
        {
            id: 'event-gyro-marco',
            year: '1890',
            type: 'normal',
            title: 'Gyro Zeppeli\'s Mission',
            summary: 'Gyro (Julius Caesar Zeppeli, age 24) enters race to save 9-year-old servant Marco from wrongful execution.',
            details: [
                'Born in Naples to hereditary executioner family',
                'Motivation: Win prestige for Naples to save Marco',
                'Masters the Spin technique (SBR universe equivalent of Hamon)'
            ],
            tags: [
                { type: 'character', name: 'Gyro Zeppeli' },
                { type: 'location', name: 'Naples' }
            ]
        },
        {
            id: 'event-valentine-corpse',
            year: '1890',
            type: 'normal',
            title: 'Valentine\'s Plan for the Holy Corpse',
            summary: 'President Funny Valentine structured race route around Saint\'s Corpse locations. He seeks the ~1,900-year-old mummified remains.',
            details: [
                'Valentine discovered Corpse Heart during expedition, awakened D4C',
                'Rose to become 23rd President of United States',
                'Holy Corpse Parts: Heart, Eyes, Ears, Spine, Arms, Legs, Skull',
                'Corpse creates Devil\'s Palms that grant Stands'
            ],
            tags: [
                { type: 'character', name: 'Funny Valentine' },
                { type: 'item', name: 'Holy Corpse' }
            ]
        },
        {
            id: 'event-race-start',
            year: '1890',
            month: 'September 25',
            type: 'major',
            title: 'Steel Ball Run Race Begins',
            summary: '3,852 racers begin 6,000 km journey from San Diego to New York. $50,000,000 prize.',
            details: [
                'Johnny encounters Gyro; touching Steel Ball briefly allows him to stand',
                'Johnny awakens TUSK ACT 1 (fingernail bullets)',
                'Diego Brando transformed into dinosaur by Scary Monsters',
                'Multiple battles against Valentine\'s subordinates'
            ],
            tags: [
                { type: 'character', name: 'Johnny Joestar' },
                { type: 'character', name: 'Gyro Zeppeli' },
                { type: 'character', name: 'Diego Brando' }
            ]
        },
        {
            id: 'event-gyro-death',
            year: '1891',
            month: 'January',
            type: 'major',
            title: 'Gyro Zeppeli Dies; Valentine Defeated',
            summary: 'Gyro dies fighting Valentine after unlocking Ball Breaker. Johnny unlocks TUSK ACT 4 and traps Valentine in Infinite Spin.',
            details: [
                'Gyro\'s death teaches Johnny the final lesson of Spin',
                'TUSK ACT 4 = Infinite Rotation',
                'Valentine condemned to eternal spinning',
                'Valentine attempts bargain, secretly draws gun',
                'Johnny kills Valentine'
            ],
            tags: [
                { type: 'character', name: 'Gyro Zeppeli' },
                { type: 'character', name: 'Funny Valentine' },
                { type: 'character', name: 'Johnny Joestar' }
            ]
        },
        {
            id: 'event-race-end',
            year: '1891',
            month: 'January 19',
            type: 'major',
            title: 'Steel Ball Run Race Ends',
            summary: 'Race ends at Trinity Church, New York. Alternate Diego with THE WORLD steals Corpse but is killed by Lucy Steel.',
            details: [
                'Valentine\'s contingency: brought Alternate Diego from parallel universe',
                'Alternate Diego has THE WORLD Stand',
                'Lucy Steel kills Alternate Diego using original Diego\'s severed head',
                'D4C paradox effect destroys Alternate Diego',
                'Pocoloco wins 1st place; Norisuke Higashikata 2nd',
                'Johnny regains ability to walk through Stand/Spin power'
            ],
            tags: [
                { type: 'character', name: 'Lucy Steel' },
                { type: 'character', name: 'Diego Brando' },
                { type: 'character', name: 'Pocoloco' }
            ]
        },
        {
            id: 'event-johnny-death',
            year: '1901',
            month: 'November 11',
            type: 'major',
            title: 'Johnny Joestar Dies (Age 29)',
            summary: 'Johnny uses Saint\'s Corpse to save wife Rina and son George from Rock Disease. His Stand crushes his skull in Equivalent Exchange.',
            details: [
                '1892: Johnny marries Rina Higashikata, moves to Japan',
                'Rina contracts Rock Disease (Higashikata curse)',
                'Johnny transfers disease away from Rina to himself',
                'Disease passes to son George III',
                'Johnny uses Equivalent Exchange with Corpse to save George',
                'Les Feuilles appears; boulder crushes Johnny\'s skull',
                'Johnny buried in Morioh, Japan'
            ],
            tags: [
                { type: 'character', name: 'Johnny Joestar' },
                { type: 'character', name: 'Rina Higashikata' },
                { type: 'location', name: 'Morioh' }
            ]
        }
    ],

    // Part 8: JoJolion
    'part-8': [
        {
            id: 'event-wall-eyes',
            year: '2011',
            month: 'March 11',
            type: 'major',
            title: 'Tōhoku Earthquake - Wall Eyes Emerge',
            summary: 'Real-world 9.0 magnitude earthquake causes anomalous "Wall Eyes" rock formations to emerge across Morioh.',
            details: [
                'Wall Eyes have ability of Equivalent Exchange',
                'Can merge/swap traits of objects/people buried within',
                'Locacaca fruit from New Guinea discovered (heals one part, petrifies another)',
                'Rock Humans (silicon-based lifeforms) control Locacaca trade'
            ],
            tags: [
                { type: 'location', name: 'Morioh' },
                { type: 'item', name: 'Locacaca' }
            ]
        },
        {
            id: 'event-fusion',
            year: '2011',
            month: 'August 19',
            type: 'major',
            title: 'The Fusion Event',
            summary: 'Yoshikage Kira (Part 8) and Josefumi Kujo attempt to steal Locacaca to cure Holy. Both are fused by Wall Eyes into new being: Josuke.',
            details: [
                'Kira = Johnny\'s great-great-grandson, marine surgeon',
                'Josefumi = saved by Holy Joestar-Kira as child',
                'Both confronted by Rock Humans; Kira fatally wounded',
                'Buried near Wall Eyes during earthquake',
                'Wall Eyes + New Locacaca cause fusion',
                'Result: Josuke Higashikata (4 testicles, split irises, double tongue)'
            ],
            tags: [
                { type: 'character', name: 'Josuke Higashikata' },
                { type: 'character', name: 'Yoshikage Kira' },
                { type: 'character', name: 'Josefumi Kujo' }
            ]
        },
        {
            id: 'event-jojolion-main',
            year: '2011-2012',
            type: 'normal',
            title: 'JoJolion Events',
            summary: 'Amnesiac Josuke is discovered by Yasuho Hirose and adopted by Norisuke Higashikata IV. He investigates his identity while confronting Rock Humans.',
            details: [
                'Main villain: Tooru (Rock Human with Wonder of U)',
                'Wonder of U brings calamity to anyone pursuing it',
                'Josuke seeks to cure Holy Joestar-Kira\'s illness'
            ],
            tags: [
                { type: 'character', name: 'Josuke Higashikata' },
                { type: 'character', name: 'Yasuho Hirose' },
                { type: 'character', name: 'Tooru' }
            ]
        },
        {
            id: 'event-jojolion-resolution',
            year: '2012',
            type: 'major',
            title: 'JoJolion Resolution',
            summary: 'Tooru defeated; Tsurugi cured of Rock Disease. Josuke accepts identity as neither Josefumi nor Kira - a new person.',
            details: [
                'Deaths: Jobin Higashikata, Kaato Higashikata, Kei Nijimura, Rai Mamezuku',
                'Josuke fails to cure Holy Joestar-Kira',
                'Final scene: family choosing dessert for Norisuke\'s hospital discharge',
                'Josuke embraces his new identity'
            ],
            tags: [
                { type: 'character', name: 'Josuke Higashikata' },
                { type: 'character', name: 'Tooru' }
            ]
        }
    ],

    // Part 9: The JoJoLands
    'part-9': [
        {
            id: 'event-jodio-intro',
            year: '2020s',
            type: 'major',
            title: 'Jodio Joestar in Hawaii',
            summary: 'Jodio Joestar (age 15), great-great-great-grandson of Johnny, is a high school student and small-time gangster in Hawaii.',
            details: [
                'Grandson of Joseph Joestar (SBR universe)',
                'Son of Barbara Ann Joestar (sister of Holy Joestar-Kira)',
                'Attends McKinley High, deals drugs',
                'Goal: become extremely wealthy',
                'Diagnosed with antisocial personality disorder',
                'Stand: NOVEMBER RAIN (extremely dense/heavy raindrops)',
                'Has star-shaped Joestar birthmark on left shoulder'
            ],
            tags: [
                { type: 'character', name: 'Jodio Joestar' },
                { type: 'location', name: 'Hawaii' }
            ]
        },
        {
            id: 'event-jojolands-team',
            year: '2020s',
            type: 'normal',
            title: 'The JoJoLands Team',
            summary: 'Jodio works with his older brother Dragona and classmates under gang boss Meryl Mei Qi.',
            details: [
                'Dragona Joestar (age 18) - Stand: Smooth Operators',
                'Paco Laburantes - Stand: THE HUSTLE',
                'Usagi Alohaoe - Stand: THE MATTE KUDASAI',
                'Meryl Mei Qi - school principal and gang boss'
            ],
            tags: [
                { type: 'character', name: 'Dragona Joestar' },
                { type: 'character', name: 'Paco Laburantes' }
            ]
        },
        {
            id: 'event-lava-rock',
            year: '2020s',
            type: 'major',
            title: 'The Lava Rock Discovery',
            summary: 'Team assigned to steal diamond from Rohan Kishibe. They discover mysterious Lava Rock on Hualālai volcano that attracts valuable items.',
            details: [
                'Rohan Kishibe appears as visiting Japanese tourist/manga artist',
                'Lava Rock attracts anything of value its user touches',
                'Conflict with Howler Company ($50 billion water resource company)',
                '~31 chapters published as of February 2026 (ongoing monthly)'
            ],
            tags: [
                { type: 'character', name: 'Rohan Kishibe' },
                { type: 'item', name: 'Lava Rock' }
            ]
        }
    ]
};

// Render events when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Render events for Parts 3-9
    Object.keys(TIMELINE_EVENTS).forEach(partId => {
        if (window.JoJoTimeline && window.JoJoTimeline.renderEvents) {
            window.JoJoTimeline.renderEvents(partId, TIMELINE_EVENTS[partId]);
        }
    });
});
