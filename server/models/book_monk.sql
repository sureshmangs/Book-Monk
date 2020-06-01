-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2020 at 09:04 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_monk`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cat` varchar(30) NOT NULL,
  `subcat` varchar(30) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `ISBN` varchar(20) NOT NULL,
  `edition` int(11) NOT NULL,
  `language` varchar(20) NOT NULL,
  `publisher` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `pages` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `cat`, `subcat`, `price`, `description`, `ISBN`, `edition`, `language`, `publisher`, `author`, `image`, `pages`) VALUES
(1, 'Nudge: Improving Decisions About Health, Wealth, and Happiness', ' Self-help', 'Personal Transformation', 694, 'Every day we make choices—about what to buy or eat, about financial investments or our children’s health and education, even about the causes we champion or the planet itself. Unfortunately, we often choose poorly. Nudge is about how we make these choices and how we can make better ones. Using dozens of eye-opening examples and drawing on decades of behavioral science research, Nobel Prize winner Richard H. Thaler and Harvard Law School professor Cass R. Sunstein show that no choice is ever presented to us in a neutral way, and that we are all susceptible to biases that can lead us to make bad decisions. But by knowing how people think, we can use sensible “choice architecture” to nudge people toward the best decisions for ourselves, our families, and our society, without restricting our freedom of choice.', '9780143115267', 2009, 'English', 'Penguin Books', 'Richard H. Thaler, and Cass R. Sunstein', '9780143115267.jpg', 314),
(2, 'We Ride Upon Sticks', 'Fiction', 'Sports Fiction', 800, 'In this tour de female force, the 1989 Danvers Falcons are on an unaccountable winning streak. In chapters dense with \'80s iconography--from Heathers to Big Hair--Quan Barry expertly weaves together the individual and collective journeys of this enchanted team as they storm their way to the state championship. Helmed by good-girl captain Abby Putnam (a descendant of the infamous Salem accuser Ann Putnam) and her co-captain Jen Fiorenza, whose bleached blond \"Claw\" sees and knows all, the DHS Falcons prove to be as wily and original as their North of Boston ancestors, flaunting society\'s stale notions of femininity in order to find their glorious true selves through the crucible of team sport.', '1524748099', 2020, 'English', ' Pantheon Books', 'Quan Barry', '1524748099.jpg', 384),
(3, 'Pretty Things', 'Fiction', 'Thriller', 350, 'Two wildly different women--one a grifter, the other an heiress--are brought together by the scam of a lifetime in a page-turner from the New York Times bestselling author of Watch Me Disappear.\r\n\r\nNina once bought into the idea that her fancy liberal arts degree would lead to a fulfilling career. When that dream crashed, she turned to stealing from rich kids in L.A. alongside her wily Irish boyfriend, Lachlan. Nina learned from the best: Her mother was the original con artist, hustling to give her daughter a decent childhood despite their wayward life. But when her mom gets sick, Nina puts everything on the line to help her, even if it means running her most audacious, dangerous scam yet.\r\n\r\nVanessa is a privileged young heiress who wanted to make her mark in the world. Instead she becomes an Instagram influencer--traveling the globe, receiving free clothes and products, and posing for pictures in exotic locales. But behind the covetable façade is a life marked by tragedy. After a broken engagement, Vanessa retreats to her family\'s sprawling mountain estate, Stonehaven: A mansion of dark secrets not just from Vanessa\'s past, but from that of a lost and troubled girl named Nina.', '0525479139', 2020, 'English', 'Random House', 'Janelle Brown', '0525479139.jpg', 496),
(4, 'Ronaldo: The Obsession for Perfection', 'Biography', 'Sports', 400, 'When Cristiano Ronaldo transferred to Real Madrid for a world record-shattering £80 million in 2009, it cemented his position as one of the best players of his era.\r\n\r\nThis is the story of the two-time Ballon d\'Or winner, the first Premier League player to be named FIFA World Player of the Year, and winner of the 2010–2011 Golden Shoe.', '1906850291', 2012, 'English', 'Icon Books', 'Luca Caioli', '1906850291.jpg', 288),
(5, 'Recollections of My Nonexistence: A Memoir', 'Biography', 'Memoir', 600, 'An electric portrait of the artist as a young woman that asks how a writer finds her voice in a society that prefers women to be silent\r\n\r\nIn Recollections of My Nonexistence, Rebecca Solnit describes her formation as a writer and as a feminist in 1980s San Francisco, in an atmosphere of gender violence on the street and throughout society and the exclusion of women from cultural arenas. She tells of being poor, hopeful, and adrift in the city that became her great teacher; of the small apartment that, when she was nineteen, became the home in which she transformed herself; of how punk rock gave form and voice to her own fury and explosive energy.\r\n\r\nSolnit recounts how she came to recognize the epidemic of violence against women around her, the street harassment that unsettled her, the trauma that changed her, and the authority figures who routinely disdained and disbelieved girls and women, including her. Looking back, she sees all these as consequences of the voicelessness that was and still is the ordinary condition of women, and how she contended with that while becoming a writer and a public voice for women’s right', '0593083334', 2020, 'English', ' Viking', 'Rebecca Solnit', '0593083334.jpg', 256),
(6, 'Pirate Queen: A Story of Zheng Yi Sao', 'Biography', 'Childrens', 399, 'The most powerful pirate in history was a woman who was born into poverty in Guangzhou, China, in the late 1700s. When pirates attacked her town and the captain took a liking to her, she saw a way out. Zheng Yi Sao agreed to marry him only if she got an equal share of his business. When her husband died six years later, she took command of the fleet.\r\n\r\nOver the next decade, the pirate queen built a fleet of over 1,800 ships and 70,000 men. On land and sea, Zheng Yi Sao’s power rivaled the emperor himself. Time and again, her ships triumphed over the emperor’s ships.\r\n\r\nWhen she was ready to retire, Zheng Yi Sao surrendered ? on her own terms, of course. Even though there was a price on her head, she was able to negotiate her freedom, living in peace and prosperity for the rest of her days.', '9781773061245', 2020, 'English', 'Groundwood Books', 'Helaine Becker', '9781773061245.jpg', 36),
(7, 'Dancing at the Pity Party', 'Biography', 'Comics', 299, 'Part poignant cancer memoir and part humorous reflection on a motherless life, this debut graphic novel is extraordinarily comforting and engaging.\r\n\r\nFrom before her mother\'s first oncology appointment through the stages of her cancer to the funeral, sitting shiva, and afterward, when she must try to make sense of her life as a motherless daughter, Tyler Feder tells her story in this graphic novel that is full of piercing--but also often funny--details. She shares the important post-death firsts, such as celebrating holidays without her mom, the utter despair of cleaning out her mom\'s closet, ending old traditions and starting new ones, and the sting of having the \"I\'ve got to tell Mom about this\" instinct and not being able to act on it. This memoir, bracingly candid and sweetly humorous, is for anyone struggling with loss who just wants someone to get it.', '0525553029', 2020, 'English', 'Dial Books', 'Tyler Feder', '0525553029.jpg', 208),
(8, 'The Oldest Student: How Mary Walker Learned to Read', 'Biography', 'Childrens', 100, 'Imagine learning to read at the age of 116! Discover the true story of Mary Walker, the nation\'s oldest student who did just that, in this picture book from a Caldecott Honor-winning illustrator and a rising star author.\r\n\r\nIn 1848, Mary Walker was born into slavery. At age 15, she was freed, and by age 20, she was married and had her first child. By age 68, she had worked numerous jobs, including cooking, cleaning, babysitting, and selling sandwiches to raise money for her church. At 114, she was the last remaining member of her family. And at 116, she learned to read. From Rita Lorraine Hubbard and rising star Oge Mora comes the inspirational story of Mary Walker, a woman whose long life spanned from the Civil War to the Civil Rights Movement, and who--with perseverance and dedication--proved that you\'re never too old to learn.', '1524768286', 2020, 'English', 'Schwartz & Wade', 'Rita Lorraine Hubbard', '1524768286.jpg', 40),
(9, 'Where the Lost Wander', 'Fiction', 'Romance', 250, 'The Overland Trail, 1853: Naomi May never expected to be widowed at twenty. Eager to leave her grief behind, she sets off with her family for a life out West. On the trail, she forms an instant connection with John Lowry, a half-Pawnee man straddling two worlds and a stranger in both.\r\n\r\nBut life in a wagon train is fraught with hardship, fear, and death. Even as John and Naomi are drawn to each other, the trials of the journey and their disparate pasts work to keep them apart. John’s heritage gains them safe passage through hostile territory only to come between them as they seek to build a life together.\r\n\r\nWhen a horrific tragedy strikes, decimating Naomi’s family and separating her from John, the promises they made are all they have left. Ripped apart, they can’t turn back, they can’t go on, and they can’t let go. Both will have to make terrible sacrifices to find each other, save each other, and eventually… make peace with who they are.', '1542017963', 2020, 'English', ' Lake Union Publishing', ' Amy Harmon', '1542017963.jpg', 348),
(10, 'What I Like About You', 'Fiction', 'Romance', 700, 'There are a million things that Halle Levitt likes about her online best friend, Nash.\r\n\r\nHe’s an incredibly talented graphic novelist. He loves books almost as much as she does. And she never has to deal with the awkwardness of seeing him in real life. They can talk about anything…\r\n\r\nExcept who she really is.\r\n\r\nBecause online, Halle isn’t Halle—she’s Kels, the enigmatically cool creator of One True Pastry, a YA book blog that pairs epic custom cupcakes with covers and reviews. Kels has everything Halle doesn’t: friends, a growing platform, tons of confidence, and Nash.\r\n\r\nThat is, until Halle arrives to spend senior year in Gramps’s small town and finds herself face-to-face with real, human, not-behind-a-screen Nash. Nash, who is somehow everywhere she goes—in her classes, at the bakery, even at synagogue.\r\n\r\nNash who has no idea she’s actually Kels.\r\n\r\nIf Halle tells him who she is, it will ruin the non-awkward magic of their digital friendship. Not telling him though, means it can never be anything more. Because while she starts to fall for Nash as Halle…he’s in love with Kels. ', '1534445773', 2020, 'English', ' Simon & Schuster Books for Young Readers', 'Marisa Kanter', '1534445773.jpg', 416),
(11, 'The Perfect Escape', 'Fiction', 'Romance', 490, 'Nate Jae-Woo Kim wants to be rich. When one of his classmates offers Nate a ridiculous amount of money to commit grade fraud, he knows that taking the windfall would help support his prideful Korean family, but is compromising his integrity worth it?\r\n\r\nLuck comes in the form of Kate Anderson, Nate’s colleague at the zombie-themed escape room where he works. She approaches Nate with a plan: a local tech company is hosting a weekend-long survivalist competition with a huge cash prize. It could solve all of Nate’s problems, and Kate needs the money too.\r\n\r\nIf the two of them team up, Nate has a true shot at winning the grand prize. But the real challenge? Making through the weekend with his heart intact', '1728209390', 2020, 'English', 'Sourcebooks Fire', 'Suzanne Park', '1728209390.jpg', 336),
(12, 'Four Days of You and Me', 'Fiction', 'Romance', 495, 'A new swoon-worthy romance following a couple\'s love story on the same date over four years.\r\n\r\nEvery May 7, the students at Coffee County High School take a class trip. And every year, Lulu’s relationship with Alex Rouvelis gets a little more complicated. Freshman year, they went from sworn enemies to more than friends after a close encounter in an escape room. It’s been hard for Lulu to quit Alex ever since.\r\n\r\nThrough breakups, make ups, and dating other people, each year’s class trip brings the pair back together and forces them to confront their undeniable connection. From the science museum to an amusement park, from New York City to London, Lulu learns one thing is for sure: love is the biggest trip of all.', '1492684139', 2020, 'English', 'Sourcebooks Fire', 'Miranda Kenneally', '1492684139.jpg', 352),
(13, 'The Empire of Dreams', 'Fiction', 'Fantasy', 750, 'New York Times-bestselling author Rae Carson makes a triumphant return to the world of her award-winning Girl of Fire and Thorns trilogy in this extraordinary stand-alone novel. With action, adventure, and a heroine set on destroying the patriarchal limits meant to keep her in her place, The Empire of Dreams once again proves that Rae Carson is a master of epic fantasy.\r\n\r\nEven though Red Sparkle Stone is a foundling orphan with an odd name and a veiled past, she\'s about to be adopted into the royal family—by Empress Elisa herself. Sixteen-year-old Red can hardly believe her luck. Then, in a stunning political masterstroke, the empress\'s greatest rival blocks the adoption, and Red is left with no family and no future.\r\n\r\nGrieving and lost, but determined to find her place, Red hatches a daring plan: she will prove herself as a recruit for the world\'s most elite fighting force, the legendary Royal Guard—something no woman has done before. But it\'s no coincidence that someone wanted her to fail as a princess, someone whose shadowy agenda puts everything she loves at risk. As danger closes in, it will be up to Red and her new friends—and maybe some new enemies—to save the empire. If they can survive recruitment year.', '0062691929', 2020, 'English', 'Greenwillow Books', 'Rae Carson', '0062691929.jpg', 448),
(14, 'Christmas Shopaholic', 'Fiction', 'Humour', 455, 'Becky Brandon (née Bloomwood) adores Christmas. It\'s always the same – Mum and Dad hosting, carols playing, Mum pretending she made the Christmas pudding, and the next-door neighbours coming round for sherry in their terrible festive jumpers.\r\n\r\nAnd now it\'s even easier with online bargain-shopping sites – if you spend enough you even get free delivery. Sorted!\r\n\r\nBut this year looks set to be different. Unable to resist the draw of craft beer and smashed avocado, Becky\'s parents are moving to ultra-trendy Shoreditch and have asked Becky if she\'ll host Christmas this year. What could possibly go wrong?\r\n\r\nWith sister Jess demanding a vegan turkey, husband Luke determined that he just wants aftershave again, and little Minnie insisting on a very specific picnic hamper – surely Becky can manage all this, as well as the surprise appearance of an old boyfriend and his pushy new girlfriend, whose motives are far from clear . . .\r\n\r\nWill chaos ensue, or will Becky manage to bring comfort and joy to Christmas?', '1787631974', 2019, 'English', 'Bantam Press', 'Sophie Kinsella', '1787631974.jpg', 384),
(15, 'The Right Swipe', 'Fiction', 'Contemporary', 630, 'Rhiannon Hunter may have revolutionized romance in the digital world, but in real life she only swipes right on her career—and the occasional hookup. The cynical dating app creator controls her love life with a few key rules:\r\n\r\n- Nude pics are by invitation only\r\n\r\n- If someone stands you up, block them with extreme prejudice\r\n\r\n- Protect your heart\r\n\r\nOnly there aren\'t any rules to govern her attraction to her newest match, former pro-football player Samson Lima. The sexy and seemingly sweet hunk woos her one magical night... and disappears.\r\n\r\nRhi thought she\'d buried her hurt over Samson ghosting her, until he suddenly surfaces months later, still big, still beautiful—and in league with a business rival. He says he won\'t fumble their second chance, but she\'s wary. A temporary physical partnership is one thing, but a merger of hearts? Surely that’s too high a risk', '0062878093', 2019, 'English', ' Avon', 'Alisha Rai', '0062878093.jpg', 387),
(16, 'Master Class', 'Fiction', 'Science Fiction', 255, 'Every child\'s potential is regularly determined by a standardized measurement: their quotient (Q). Score high enough, and attend a top tier school with a golden future. Score too low, and it\'s off to a federal boarding school with limited prospects afterwards. The purpose? An improved society where education costs drop, teachers focus on the more promising students, and parents are happy.\r\n\r\n\r\nElena Fairchild is a teacher at one of the state\'s elite schools. When her nine-year-old daughter bombs a monthly test and her Q score drops to a disastrously low level, she is immediately forced to leave her top school for a federal institution hundreds of miles away. As a teacher, Elena thought she understood the tiered educational system, but as a mother whose child is now gone, Elena\'s perspective is changed forever. She just wants her daughter back.\r\n\r\nAnd she will do the unthinkable to make it happen', '0440000858', 2020, 'English', 'Berkley', 'Christina Dalcher', '0440000858.jpg', 100),
(17, 'Harrow the Ninth', 'Fiction', 'Fantasy', 750, 'Harrow the Ninth, the sequel to the sensational, USA today best-selling novel Gideon the Ninth, turns a galaxy inside out as one necromancer struggles to survive the wreckage of herself aboard the Emperor\'s haunted space station.\r\n\r\nShe answered the Emperor\'s call.\r\n\r\nShe arrived with her arts, her wits, and her only friend.\r\n\r\nIn victory, her world has turned to ash.\r\n\r\nAfter rocking the cosmos with her deathly debut, Tamsyn Muir continues the story of the penumbral Ninth House in Harrow the Ninth, a mind-twisting puzzle box of mystery, murder, magic, and mayhem. Nothing is as it seems in the halls of the Emperor, and the fate of the galaxy rests on one woman\'s shoulders.\r\n\r\nHarrowhark Nonagesimus, last necromancer of the Ninth House, has been drafted by her Emperor to fight an unwinnable war. Side-by-side with a detested rival, Harrow must perfect her skills and become an angel of undeath — but her health is failing, her sword makes her nauseous, and even her mind is threatening to betray her.\r\n\r\nSealed in the gothic gloom of the Emperor\'s Mithraeum with three unfriendly teachers, hunted by the mad ghost of a murdered planet, Harrow must confront two unwelcome questions: is somebody trying to kill her? And if they succeeded, would the universe be better off?\r\n\r\nAt the Publisher\'s request, this title is being sold without Digital Rights Management Software (DRM) applied.', '1250313228', 2020, 'English', 'Tor.com', 'Tamsyn Muir', '1250313228.jpg', 512),
(18, 'On Vanishing: Mortality, Dementia, and What It Means to Disappear', 'Psychology', 'Science', 400, 'An estimated 50 million people in the world suffer from dementia. Diseases such as Alzheimer’s erase parts of one’s memory but are also often said to erase the self. People don’t simply die from such diseases; they are imagined, in the clichés of our era, as vanishing in plain sight, fading away, or enduring a long goodbye. In On Vanishing, Lynn Casteel Harper, a Baptist minister and nursing home chaplain, investigates the myths and metaphors surrounding dementia and aging, addressing not only the indignities caused by the condition but also by the rhetoric surrounding it. Harper asks essential questions about the nature of our outsize fear of dementia, the stigma this fear may create, and what it might mean for us all to try to “vanish well.”\r\n\r\nWeaving together personal stories with theology, history, philosophy, literature, and science, Harper confronts our elemental fears of disappearance and death, drawing on her own experiences with people with dementia both in the U.S. health-care system and within her own family. In the course of unpacking her own stories and encounters—of leading a prayer group on a dementia unit; of meeting individuals dismissed as “already gone” and finding them still possessed of complex, vital inner lives; of witnessing her grandfather’s final years with Alzheimer’s and discovering her own heightened genetic risk of succumbing to the disease—Harper engages in an exploration of dementia that is unlike anything written before on the subject.\r\n', '9781948226288', 2020, 'English', 'Catapult', 'Lynn Casteel Harper', '9781948226288.jpg', 240),
(19, 'The Hot Hand: The Mystery and Science of Streaks', 'Psychology', 'Sports', 600, 'For decades, statisticians, social scientists, psychologists, and economists (among them Nobel Prize winners) have spent massive amounts of precious time thinking about whether streaks actually exist. After all, a substantial number of decisions that we make in our everyday lives are quietly rooted in this one question: If something happened before, will it happen again? Is there such a thing as being in the zone? Can someone have a “hot hand”? Or is it simply a case of seeing patterns in randomness? Or, if streaks are possible, where can they be found?\r\n\r\nIn The Hot Hand, Wall Street Journal reporter Ben Cohen offers an unfailingly entertaining and provocative investigation into these questions. He begins with how a $35,000 fine and a wild night in New York revived a debate about the existence of streaks that was several generations in the making. We learn how the ability to recognize and then bet against streaks turned a business school dropout named David Booth into a billionaire, and how the subconscious nature of streak-related bias can make the difference between life and death for asylum seekers. We see how previously unrecognized streaks hidden amidst archival data helped solve one of the most haunting mysteries of the twentieth century, the disappearance of Raoul Wallenberg. Cohen also exposes how streak-related incentives can be manipulated, from the five-syllable word that helped break arcade profit records to an arc of black paint that allowed Stephen Curry to transform from future junior high coach into the greatest three-point shooter in NBA history. Crucially, Cohen also explores why false recognition of nonexistent streaks can have cataclysmic results, particularly if you are a sugar beet farmer or the sort of gambler who likes to switch to black on the ninth spin of the roulette wheel.', '0062820745', 2020, 'English', 'Custom House', 'Ben Cohen', '0062820745.jpg', 304),
(20, 'The Victory Machine: The Making and Unmaking of the Warriors Dynasty', 'Sports', 'Basketball', 450, 'The Golden State Warriors dominated the NBA for the better part of a decade. Since the arrival of owner Joe Lacob, they won more championships and sold more merchandise than any other franchise in the sport. And in 2019, they opened the doors on a lavish new stadium.\r\n\r\nYet all this success contained some of the seeds of decline. Ethan Sherwood Strauss\'s clear-eyed exposé reveals the team\'s culture, its financial ambitions and struggles, and the price that its players and managers have paid for all their winning. From Lacob\'s unlikely acquisition of the team to Kevin Durant\'s controversial departure, Strauss shows how the smallest moments can define success or failure for years.\r\n\r\n\r\nAnd, looking ahead, Strauss ponders whether this organization can rebuild after its abrupt fall from the top, and how a relentless business wears down its players and executives. The Victory Machine is a defining book on the modern NBA: it not only rewrites the story of the Warriors, but shows how the Darwinian business of pro basketball really works.', '1541736230', 2020, 'English', 'PublicAffairs', 'Ethan Sherwood Strauss', '1541736230.jpg', 224);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(255) NOT NULL,
  `subcat_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`, `subcat_name`) VALUES
(1, 'Art and Music', 'Art History'),
(2, 'Art and Music', 'Calligraphy'),
(3, 'Art and Music', 'Drawing'),
(4, 'Art and Music', 'Fashion'),
(5, 'Art and Music', 'Film'),
(6, 'Biography', 'Ethnic & Cultural'),
(7, 'Biography', 'Europe'),
(8, 'Biography', 'Historical'),
(9, 'Biography', 'Leaders & Notable People'),
(10, 'Biography', 'Military'),
(11, 'Business', 'Careers'),
(12, 'Business', 'Economics'),
(13, 'Business', 'Finance'),
(14, 'Business', 'Industries'),
(15, 'Business', 'International');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`email`) VALUES
('tommy@shelby.com');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `user_id` varchar(30) NOT NULL,
  `order_id` int(11) NOT NULL,
  `items` varchar(500) NOT NULL,
  `amount` int(11) NOT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  `delivery` varchar(255) NOT NULL,
  `phone` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`user_id`, `order_id`, `items`, `amount`, `time`, `date`, `delivery`, `phone`) VALUES
('100424446524782505338', 3, '[{\"item\":\"Suresh Tech Book\",\"price\":999,\"quantity\":3},{\"item\":\"Suresh Tech Book 2\",\"price\":1999,\"quantity\":2}]', 7094, '18:52:39', '2020-05-29', '17, Main Street, Jaipur, Rajasthan, India, 302017', '9119214899'),
('100424446524782505338', 4, '[{\"item\":\"Suresh Tech Book\",\"price\":999,\"quantity\":3},{\"item\":\"Suresh Tech Book 2\",\"price\":1999,\"quantity\":2}]', 7094, '23:42:50', '2020-05-29', '17, Main Street, Jaipur, Rajasthan, India, 302017', '9119214899'),
('100424446524782505338', 5, '[{\"item\":\"Ronaldo: The Obsession for Perfection\",\"price\":400,\"quantity\":1},{\"item\":\"Christmas Shopaholic\",\"price\":455,\"quantity\":1}]', 954, '01:08:48', '2020-06-01', '17, Main Street, Jaipur, Rajasthan, India, 302017', '9119214899'),
('100424446524782505338', 6, '[{\"item\":\"What I Like About You\",\"price\":700,\"quantity\":2}]', 1499, '00:14:16', '2020-06-02', '17, Main Street, Jaipur, Rajasthan, India, 302017', '9119214899');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `add_house` varchar(60) NOT NULL,
  `add_street` varchar(60) NOT NULL,
  `add_city` varchar(30) NOT NULL,
  `add_state` varchar(30) NOT NULL,
  `add_country` varchar(30) NOT NULL,
  `add_pincode` int(11) NOT NULL,
  `acc_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `image`, `phone`, `add_house`, `add_street`, `add_city`, `add_state`, `add_country`, `add_pincode`, `acc_created`) VALUES
('108850365766433458311', 'Thomas Shelby', 'thomas@peaky_blinders.com', 'https://lh3.googleusercontent.com/a-/AOh14Gg7Fez1su5gszZS3IG8GuEo9b8-_gH5dcQViEZX', '8696466813', '17', 'Main Street', 'Jaipur', 'Rajasthan', 'India', 302017, '2020-05-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
