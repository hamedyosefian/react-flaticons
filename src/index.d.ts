/// <reference types="react" />
import { FC, SVGAttributes , CSSProperties, Context} from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export interface IconContextInterface{
  color?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
  attr?: SVGAttributes<SVGElement>;
}

export type Icon = FC<IconProps>;
export const IconContext: Context<IconContextInterface>;
export const A: Icon;
export const Ad: Icon;
export const AddDocument: Icon;
export const AddFolder: Icon;
export const Add: Icon;
export const AddressBook: Icon;
export const AirConditioner: Icon;
export const AirFreshener: Icon;
export const AlarmClock: Icon;
export const AlarmExclamation: Icon;
export const AlarmPlus: Icon;
export const AlarmSnooze: Icon;
export const AlignJustify: Icon;
export const AlignLeft: Icon;
export const Ambulance: Icon;
export const AngleCircleDown: Icon;
export const AngleCircleLeft: Icon;
export const AngleCircleRight: Icon;
export const AngleCircleUp: Icon;
export const AngleDoubleLeft: Icon;
export const AngleDoubleRight: Icon;
export const AngleDoubleSmallDown: Icon;
export const AngleDoubleSmallLeft: Icon;
export const AngleDoubleSmallRight: Icon;
export const AngleDoubleSmallUp: Icon;
export const AngleDown: Icon;
export const AngleLeft: Icon;
export const AngleRight: Icon;
export const AngleSmallDown: Icon;
export const AngleSmallLeft: Icon;
export const AngleSmallRight: Icon;
export const AngleSmallUp: Icon;
export const AngleSquareDown: Icon;
export const AngleSquareLeft: Icon;
export const AngleSquareRight: Icon;
export const AngleSquareUp: Icon;
export const AngleUp: Icon;
export const Angry: Icon;
export const AppleWhole: Icon;
export const AppsAdd: Icon;
export const AppsDelete: Icon;
export const AppsSort: Icon;
export const Apps: Icon;
export const Archive: Icon;
export const ArrowAltCircleDown: Icon;
export const ArrowAltCircleLeft: Icon;
export const ArrowAltCircleRight: Icon;
export const ArrowAltCircleUp: Icon;
export const ArrowAltDown: Icon;
export const ArrowAltFromBottom: Icon;
export const ArrowAltFromLeft: Icon;
export const ArrowAltFromRight: Icon;
export const ArrowAltFromTop: Icon;
export const ArrowAltLeft: Icon;
export const ArrowAltRight: Icon;
export const ArrowAltSquareDown: Icon;
export const ArrowAltSquareLeft: Icon;
export const ArrowAltSquareRight: Icon;
export const ArrowAltSquareUp: Icon;
export const ArrowAltToBottom: Icon;
export const ArrowAltToLeft: Icon;
export const ArrowAltToRight: Icon;
export const ArrowAltToTop: Icon;
export const ArrowAltUp: Icon;
export const ArrowCircleDown: Icon;
export const ArrowCircleLeft: Icon;
export const ArrowCircleRight: Icon;
export const ArrowCircleUp: Icon;
export const ArrowDown: Icon;
export const ArrowFromBottom: Icon;
export const ArrowFromLeft: Icon;
export const ArrowFromRight: Icon;
export const ArrowFromTop: Icon;
export const ArrowLeft: Icon;
export const ArrowRight: Icon;
export const ArrowSmallDown: Icon;
export const ArrowSmallLeft: Icon;
export const ArrowSmallRight: Icon;
export const ArrowSmallUp: Icon;
export const ArrowSquareDown: Icon;
export const ArrowSquareLeft: Icon;
export const ArrowSquareRight: Icon;
export const ArrowSquareUp: Icon;
export const ArrowToBottom: Icon;
export const ArrowToLeft: Icon;
export const ArrowToRight: Icon;
export const ArrowToTop: Icon;
export const ArrowTrendDown: Icon;
export const ArrowTrendUp: Icon;
export const ArrowUpFromSquare: Icon;
export const ArrowUpLeftFromCircle: Icon;
export const ArrowUpLeft: Icon;
export const ArrowUpRightAndArrowDownLeftFromCenter: Icon;
export const ArrowUpRightFromSquare: Icon;
export const ArrowUpRight: Icon;
export const ArrowUpSquareTriangle: Icon;
export const ArrowUpToDottedLine: Icon;
export const ArrowUp: Icon;
export const ArrowsAltH: Icon;
export const ArrowsAltV: Icon;
export const ArrowsAlt: Icon;
export const ArrowsCross: Icon;
export const ArrowsFromDottedLine: Icon;
export const ArrowsFromLine: Icon;
export const ArrowsHCopy: Icon;
export const ArrowsH: Icon;
export const ArrowsRepeat1: Icon;
export const ArrowsRepeat: Icon;
export const ArrowsToDottedLine: Icon;
export const ArrowsToLine: Icon;
export const Arrows: Icon;
export const AsseptDocument: Icon;
export const AssistiveListeningSystems: Icon;
export const Asterik: Icon;
export const At: Icon;
export const Aubergine: Icon;
export const Avocado: Icon;
export const B: Icon;
export const BabyCarriage: Icon;
export const Backpack: Icon;
export const Bacon: Icon;
export const BadgeCheck: Icon;
export const BadgeDollar: Icon;
export const BadgePercent: Icon;
export const BadgeSheriff: Icon;
export const Badge: Icon;
export const BagsShopping: Icon;
export const Bahai: Icon;
export const BalanceScaleLeft: Icon;
export const BalanceScaleRight: Icon;
export const Ball: Icon;
export const Balloons: Icon;
export const Ballot: Icon;
export const Ban: Icon;
export const BandAid: Icon;
export const Bank: Icon;
export const BarberShop: Icon;
export const BarcodeRead: Icon;
export const BarcodeScan: Icon;
export const Barcode: Icon;
export const BarsProgress: Icon;
export const BaseballAlt: Icon;
export const Baseball: Icon;
export const Basket: Icon;
export const Basketball: Icon;
export const BedAlt: Icon;
export const Bed: Icon;
export const Beer: Icon;
export const BellRing: Icon;
export const BellSchool: Icon;
export const Bell: Icon;
export const Bike: Icon;
export const BikingMountain: Icon;
export const Biking: Icon;
export const Billiard: Icon;
export const BlindsOpen: Icon;
export const BlindsRaised: Icon;
export const Blinds: Icon;
export const Bold: Icon;
export const Bolt: Icon;
export const BookAlt: Icon;
export const BookArrowRight: Icon;
export const BookArrowUp: Icon;
export const BookBookmark: Icon;
export const BookOpenCover: Icon;
export const BookOpenReader: Icon;
export const Book: Icon;
export const Bookmark: Icon;
export const Books: Icon;
export const Bottle: Icon;
export const BowArrow: Icon;
export const BowlingBall: Icon;
export const BowlingPins: Icon;
export const Bowling: Icon;
export const BoxAlt: Icon;
export const BoxBallot: Icon;
export const BoxCheck: Icon;
export const BoxTissue: Icon;
export const Box: Icon;
export const Boxes: Icon;
export const BoxingGlove: Icon;
export const Braille: Icon;
export const BrainCircuit: Icon;
export const BreadSlice: Icon;
export const Bread: Icon;
export const Briefcase: Icon;
export const Broccoli: Icon;
export const Broom: Icon;
export const Browser: Icon;
export const Brush: Icon;
export const Bug: Icon;
export const Building: Icon;
export const Bulb: Icon;
export const BullseyePointer: Icon;
export const Bullseye: Icon;
export const Burrito: Icon;
export const BusAlt: Icon;
export const Bus: Icon;
export const BusinessTime: Icon;
export const Butterfly: Icon;
export const C: Icon;
export const CakeBirthday: Icon;
export const CakeWedding: Icon;
export const Calculator: Icon;
export const CalendarCheck: Icon;
export const CalendarClock: Icon;
export const CalendarExclamation: Icon;
export const CalendarLinesPen: Icon;
export const CalendarLines: Icon;
export const CalendarMinus: Icon;
export const CalendarPen: Icon;
export const CalendarPlus: Icon;
export const Calendar: Icon;
export const Calendars: Icon;
export const CallHistory: Icon;
export const CallIncoming: Icon;
export const CallMissed: Icon;
export const CallOutgoing: Icon;
export const Camcorder: Icon;
export const Camera: Icon;
export const Camping: Icon;
export const CandyAlt: Icon;
export const Candy: Icon;
export const CannedFood: Icon;
export const CarAlt: Icon;
export const CarBattery: Icon;
export const CarBolt: Icon;
export const CarBuilding: Icon;
export const CarBump: Icon;
export const CarBus: Icon;
export const CarCircleBolt: Icon;
export const CarCrash: Icon;
export const CarGarage: Icon;
export const CarMechanic: Icon;
export const CarSideBolt: Icon;
export const CarSide: Icon;
export const CarTilt: Icon;
export const CarWash: Icon;
export const Car: Icon;
export const CaravanAlt: Icon;
export const Caravan: Icon;
export const CaretCircleDown: Icon;
export const CaretCircleRight: Icon;
export const CaretCircleUp: Icon;
export const CaretDown: Icon;
export const CaretLeft: Icon;
export const CaretQuareUp: Icon;
export const CaretRight: Icon;
export const CaretSquareDown: Icon;
export const CaretSquareLeft: Icon;
export const CaretSquareLeft1: Icon;
export const CaretSquareRight: Icon;
export const CaretUp: Icon;
export const Carrot: Icon;
export const Cars: Icon;
export const CashRegister: Icon;
export const ChairOffice: Icon;
export const Chair: Icon;
export const ChargingStation: Icon;
export const ChartArea: Icon;
export const ChartConnected: Icon;
export const ChartHistogram: Icon;
export const ChartLineUp: Icon;
export const ChartNetwork: Icon;
export const ChartPieAlt: Icon;
export const ChartPie: Icon;
export const ChartPyramid: Icon;
export const ChartScatter: Icon;
export const ChartSetTheory: Icon;
export const ChartTree: Icon;
export const ChatArrowDown: Icon;
export const ChatArrowGrow: Icon;
export const Check: Icon;
export const Checkbox: Icon;
export const Cheese: Icon;
export const Cherry: Icon;
export const ChessBishop: Icon;
export const ChessBoard: Icon;
export const ChessClockAlt: Icon;
export const ChessClock: Icon;
export const ChessKingAlt: Icon;
export const ChessKing: Icon;
export const ChessKnightAlt: Icon;
export const ChessKnight: Icon;
export const ChessPawnAlt: Icon;
export const ChessPiece: Icon;
export const ChessQueenAlt: Icon;
export const ChessQueen: Icon;
export const ChessRookAlt: Icon;
export const ChessRook: Icon;
export const Chess: Icon;
export const ChevronDoubleDown: Icon;
export const ChevronDoubleUp: Icon;
export const ChildHead: Icon;
export const Chocolate: Icon;
export const CircleEnvelope: Icon;
export const CirclePhoneFlip: Icon;
export const CirclePhoneHangup: Icon;
export const CirclePhone: Icon;
export const CircleSmall: Icon;
export const Circle: Icon;
export const Clip: Icon;
export const ClipboardListCheck: Icon;
export const ClipboardList: Icon;
export const ClockEightThirty: Icon;
export const ClockElevenThirty: Icon;
export const ClockEleven: Icon;
export const ClockFiveThirty: Icon;
export const ClockFive: Icon;
export const ClockFourThirty: Icon;
export const ClockNineThirty: Icon;
export const ClockNine: Icon;
export const ClockOneThirty: Icon;
export const ClockOne: Icon;
export const ClockSevenThirty: Icon;
export const ClockSeven: Icon;
export const ClockSixThirty: Icon;
export const ClockSix: Icon;
export const ClockTenThirty: Icon;
export const ClockTen: Icon;
export const ClockThreeThirty: Icon;
export const ClockThree: Icon;
export const ClockTwelveThirty: Icon;
export const ClockTwelve: Icon;
export const ClockTwoThirty: Icon;
export const ClockTwo: Icon;
export const Clock: Icon;
export const CloudCheck: Icon;
export const CloudDisabled: Icon;
export const CloudDownloadAlt: Icon;
export const CloudDownload: Icon;
export const CloudDrizzle: Icon;
export const CloudHailMixed: Icon;
export const CloudHail: Icon;
export const CloudMoonRain: Icon;
export const CloudMoon: Icon;
export const CloudRain: Icon;
export const CloudRainbow: Icon;
export const CloudShare: Icon;
export const CloudShowersHeavy: Icon;
export const CloudShowers: Icon;
export const CloudSleet: Icon;
export const CloudSnow: Icon;
export const CloudSunRain: Icon;
export const CloudSun: Icon;
export const CloudUploadAlt: Icon;
export const CloudUpload: Icon;
export const Cloud: Icon;
export const CloudsMoon: Icon;
export const CloudsSun: Icon;
export const Clouds: Icon;
export const Club: Icon;
export const CocktailAlt: Icon;
export const Cocktail: Icon;
export const CodeBranch: Icon;
export const CodeCommit: Icon;
export const CodeCompare: Icon;
export const CodeFork: Icon;
export const CodeMerge: Icon;
export const CodePullRequestClosed: Icon;
export const CodePullRequestDraft: Icon;
export const CodePullRequest: Icon;
export const CodeSimple: Icon;
export const CoffeePot: Icon;
export const Coffee: Icon;
export const Coin: Icon;
export const Coins: Icon;
export const Comet: Icon;
export const CommentAltMiddleTop: Icon;
export const CommentAltMiddle: Icon;
export const CommentAlt: Icon;
export const CommentArrowDown: Icon;
export const CommentArrowUpRight: Icon;
export const CommentArrowUp: Icon;
export const CommentCheck: Icon;
export const CommentCode: Icon;
export const CommentDollar: Icon;
export const CommentExclamation: Icon;
export const CommentHeart: Icon;
export const CommentImage: Icon;
export const CommentInfo: Icon;
export const CommentPen: Icon;
export const CommentQuestion: Icon;
export const CommentQuote: Icon;
export const CommentSlash: Icon;
export const CommentSms: Icon;
export const CommentText: Icon;
export const CommentUser: Icon;
export const CommentXmark: Icon;
export const Comment: Icon;
export const CommentsDollar: Icon;
export const CommentsQuestionCheck: Icon;
export const CommentsQuestion: Icon;
export const Comments: Icon;
export const CompressAlt: Icon;
export const Compress: Icon;
export const Computer: Icon;
export const Confetti: Icon;
export const Cookie: Icon;
export const CopyAlt: Icon;
export const CopyRight: Icon;
export const Copy: Icon;
export const Copyright: Icon;
export const Corn: Icon;
export const Cow: Icon;
export const Cream: Icon;
export const CreditCard: Icon;
export const Cricket: Icon;
export const Croissant: Icon;
export const CrossCircle: Icon;
export const CrossSmall: Icon;
export const Cross: Icon;
export const Crown: Icon;
export const CrystalBall: Icon;
export const Cube: Icon;
export const Cupcake: Icon;
export const Curling: Icon;
export const CursorFinger: Icon;
export const CursorPlus: Icon;
export const CursorTextAlt: Icon;
export const CursorText: Icon;
export const Cursor: Icon;
export const D: Icon;
export const Dart: Icon;
export const Dashboard: Icon;
export const DataTransfer: Icon;
export const Database: Icon;
export const DeleteDocument: Icon;
export const DeleteUser: Icon;
export const Delete: Icon;
export const Democrat: Icon;
export const Dewpoint: Icon;
export const DiagramProject: Icon;
export const Diamond: Icon;
export const DiceAlt: Icon;
export const DiceD10: Icon;
export const DiceD12: Icon;
export const DiceD20: Icon;
export const DiceD4: Icon;
export const DiceD6: Icon;
export const DiceD8: Icon;
export const DiceFour: Icon;
export const DiceOne: Icon;
export const DiceSix: Icon;
export const DiceThree: Icon;
export const DiceTwo: Icon;
export const Dice: Icon;
export const Diploma: Icon;
export const DiscoBall: Icon;
export const Disk: Icon;
export const DisplayCode: Icon;
export const Dizzy: Icon;
export const Doctor: Icon;
export const DocumentSigned: Icon;
export const Document: Icon;
export const Dollar: Icon;
export const Donate: Icon;
export const DownLeftAndUpRightToCenter: Icon;
export const Download: Icon;
export const DraftingCompass: Icon;
export const Dreidel: Icon;
export const DrinkAlt: Icon;
export const Drumstick: Icon;
export const Duplicate: Icon;
export const ELearning: Icon;
export const E: Icon;
export const Earnings: Icon;
export const EclipseAlt: Icon;
export const Eclipse: Icon;
export const EditAlt: Icon;
export const Edit: Icon;
export const EggFried: Icon;
export const Egg: Icon;
export const EngineWarning: Icon;
export const Enter: Icon;
export const EnvelopeBan: Icon;
export const EnvelopeBulk: Icon;
export const EnvelopeDownload: Icon;
export const EnvelopeMarker: Icon;
export const EnvelopeOpenDollar: Icon;
export const EnvelopeOpenText: Icon;
export const EnvelopeOpen: Icon;
export const EnvelopePlus: Icon;
export const Envelope: Icon;
export const Equality: Icon;
export const Euro: Icon;
export const ExchangeAlt: Icon;
export const Exchange: Icon;
export const Exclamation: Icon;
export const Exit: Icon;
export const ExpandArrowsAlt: Icon;
export const ExpandArrows: Icon;
export const Expand: Icon;
export const EyeCrossed: Icon;
export const EyeDropper: Icon;
export const Eye: Icon;
export const F: Icon;
export const Feather: Icon;
export const FerrisWheel: Icon;
export const FighterJet: Icon;
export const FileAi: Icon;
export const FileChartLine: Icon;
export const FileChartPie: Icon;
export const FileCode: Icon;
export const FileEps: Icon;
export const FileInvoiceDollar: Icon;
export const FileInvoice: Icon;
export const FilePsd: Icon;
export const FileSpreadsheet: Icon;
export const FileVideo: Icon;
export const File: Icon;
export const Fill: Icon;
export const FilmSlash: Icon;
export const Film: Icon;
export const FilterSlash: Icon;
export const Filter: Icon;
export const Filters: Icon;
export const Fingerprint: Icon;
export const Fish: Icon;
export const FlagAlt: Icon;
export const FlagUsa: Icon;
export const Flag: Icon;
export const Flame: Icon;
export const FlipHorizontal: Icon;
export const FlowerBouquet: Icon;
export const FlowerTulip: Icon;
export const Flower: Icon;
export const Flushed: Icon;
export const Fog: Icon;
export const FolderDownload: Icon;
export const FolderMinus: Icon;
export const FolderTimes: Icon;
export const FolderTree: Icon;
export const FolderUpload: Icon;
export const Folder: Icon;
export const Folders: Icon;
export const Following: Icon;
export const Football: Icon;
export const Fork: Icon;
export const Form: Icon;
export const Forward: Icon;
export const Fox: Icon;
export const FrenchFries: Icon;
export const Frown: Icon;
export const Ftp: Icon;
export const FunnelDollar: Icon;
export const G: Icon;
export const Gallery: Icon;
export const GameBoardAlt: Icon;
export const Gamepad: Icon;
export const GarageCar: Icon;
export const GarageOpen: Icon;
export const Garage: Icon;
export const Garlic: Icon;
export const GasPumpAlt: Icon;
export const GasPumpSlash: Icon;
export const GasPump: Icon;
export const Gears: Icon;
export const Gem: Icon;
export const Gif: Icon;
export const GiftCard: Icon;
export const Gift: Icon;
export const Gifts: Icon;
export const GingerbreadMan: Icon;
export const GlassCheers: Icon;
export const Glass: Icon;
export const Glasses: Icon;
export const GlobeAlt: Icon;
export const Globe: Icon;
export const GolfBall: Icon;
export const Golf: Icon;
export const GraduationCap: Icon;
export const Grape: Icon;
export const GraphicTablet: Icon;
export const GridAlt: Icon;
export const Grid: Icon;
export const Grill: Icon;
export const Grimace: Icon;
export const GrinAlt: Icon;
export const GrinBeamSweat: Icon;
export const GrinBeam: Icon;
export const GrinHearts: Icon;
export const GrinSquintTears: Icon;
export const GrinSquint: Icon;
export const GrinStars: Icon;
export const GrinTears: Icon;
export const GrinTongueSquint: Icon;
export const GrinTongueWink: Icon;
export const GrinTongue: Icon;
export const GrinWink: Icon;
export const Grin: Icon;
export const Guitar: Icon;
export const Gym: Icon;
export const H: Icon;
export const HamburgerSoda: Icon;
export const Hamburger: Icon;
export const HandHoldingBox: Icon;
export const HandHoldingHeart: Icon;
export const HandHoldingSeeding: Icon;
export const Hand: Icon;
export const Handshake: Icon;
export const Hastag: Icon;
export const HatBirthday: Icon;
export const HatChef: Icon;
export const HeadSideThinking: Icon;
export const Headphones: Icon;
export const Headset: Icon;
export const HeartArrow: Icon;
export const Heart: Icon;
export const Heat: Icon;
export const HelicopterSide: Icon;
export const Highlighter: Icon;
export const Hiking: Icon;
export const HockeyPuck: Icon;
export const HockeySticks: Icon;
export const HomeLocationAlt: Icon;
export const HomeLocation: Icon;
export const Home: Icon;
export const Hotdog: Icon;
export const HourglassEnd: Icon;
export const Hourglass: Icon;
export const HouseFlood: Icon;
export const Hryvnia: Icon;
export const Humidity: Icon;
export const Hurricane: Icon;
export const I: Icon;
export const IceCream: Icon;
export const IceSkate: Icon;
export const IdBadge: Icon;
export const InboxIn: Icon;
export const InboxOut: Icon;
export const Inbox: Icon;
export const Incognito: Icon;
export const Indent: Icon;
export const Infinity: Icon;
export const Info: Icon;
export const Interactive: Icon;
export const Interlining: Icon;
export const Interrogation: Icon;
export const Italic: Icon;
export const J: Icon;
export const Jam: Icon;
export const Jpg: Icon;
export const K: Icon;
export const Kerning: Icon;
export const Key: Icon;
export const Keyboard: Icon;
export const Keynote: Icon;
export const KissBeam: Icon;
export const KissWinkHeart: Icon;
export const Kiss: Icon;
export const Kite: Icon;
export const Knife: Icon;
export const L: Icon;
export const Label: Icon;
export const LaptopCode: Icon;
export const Laptop: Icon;
export const Lasso: Icon;
export const LaughBeam: Icon;
export const LaughSquint: Icon;
export const LaughWink: Icon;
export const Laugh: Icon;
export const LayerMinus: Icon;
export const LayerPlus: Icon;
export const Layers: Icon;
export const LayoutFluid: Icon;
export const Leaf: Icon;
export const Lemon: Icon;
export const LetterCase: Icon;
export const Lettuce: Icon;
export const LevelDownAlt: Icon;
export const LevelDown: Icon;
export const LevelUpAlt: Icon;
export const LevelUp: Icon;
export const LifeRing: Icon;
export const LightbulbDollar: Icon;
export const LineWidth: Icon;
export const LinkAlt: Icon;
export const LinkHorizontalSlash: Icon;
export const LinkHorizontal: Icon;
export const LinkSlashAlt: Icon;
export const LinkSlash: Icon;
export const Link: Icon;
export const Lipstick: Icon;
export const LiraSign: Icon;
export const ListCheck: Icon;
export const List: Icon;
export const Loading: Icon;
export const LocationAlt: Icon;
export const LockAlt: Icon;
export const Lock: Icon;
export const Luchador: Icon;
export const LuggageRolling: Icon;
export const M: Icon;
export const MagicWand: Icon;
export const Mailbox: Icon;
export const MakeupBrush: Icon;
export const ManHead: Icon;
export const MapMarkerCross: Icon;
export const MapMarkerHome: Icon;
export const MapMarkerMinus: Icon;
export const MapMarkerPlus: Icon;
export const MapMarker: Icon;
export const Map: Icon;
export const MarkerTime: Icon;
export const Marker: Icon;
export const MarsDouble: Icon;
export const Mars: Icon;
export const MaskCarnival: Icon;
export const Mask: Icon;
export const Medicine: Icon;
export const Megaphone: Icon;
export const MehBlank: Icon;
export const MehRollingEyes: Icon;
export const Meh: Icon;
export const Melon: Icon;
export const MenuBurger: Icon;
export const MenuDotsVertical: Icon;
export const MenuDots: Icon;
export const MessageCode: Icon;
export const Meteor: Icon;
export const MicrophoneAlt: Icon;
export const Microphone: Icon;
export const MindShare: Icon;
export const MinusSmall: Icon;
export const Minus: Icon;
export const MobileButton: Icon;
export const MobileNotch: Icon;
export const Mobile: Icon;
export const ModeLandscape: Icon;
export const ModePortrait: Icon;
export const MoneyBillWaveAlt: Icon;
export const MoneyBillWave: Icon;
export const MoneyCheckEditAlt: Icon;
export const MoneyCheckEdit: Icon;
export const MoneyCheck: Icon;
export const Money: Icon;
export const MoonStars: Icon;
export const Moon: Icon;
export const Motorcycle: Icon;
export const Mountains: Icon;
export const Mouse: Icon;
export const MugAlt: Icon;
export const MugHotAlt: Icon;
export const MugHot: Icon;
export const MugTea: Icon;
export const Mug: Icon;
export const Mushroom: Icon;
export const MusicAlt: Icon;
export const MusicFile: Icon;
export const Music: Icon;
export const N: Icon;
export const Navigation: Icon;
export const NetworkCloud: Icon;
export const Network: Icon;
export const Noodles: Icon;
export const Notebook: Icon;
export const O: Icon;
export const OilCan: Icon;
export const OilTemp: Icon;
export const OliveOil: Icon;
export const Olives: Icon;
export const Onion: Icon;
export const Opacity: Icon;
export const Overline: Icon;
export const P: Icon;
export const Package: Icon;
export const PageBreak: Icon;
export const PaintBrush: Icon;
export const PaintRoller: Icon;
export const Palette: Icon;
export const Pan: Icon;
export const PaperPlane: Icon;
export const Password: Icon;
export const Pause: Icon;
export const Paw: Icon;
export const Peach: Icon;
export const PencilRuler: Icon;
export const Pencil: Icon;
export const Pennant: Icon;
export const PeoplePoll: Icon;
export const PepperHot: Icon;
export const Pepper: Icon;
export const Percentage: Icon;
export const Pharmacy: Icon;
export const PhoneCall: Icon;
export const PhoneCross: Icon;
export const PhoneOffice: Icon;
export const PhonePause: Icon;
export const PhoneSlash: Icon;
export const PhotoFilmMusic: Icon;
export const PhotoVideo: Icon;
export const Physics: Icon;
export const Picnic: Icon;
export const Picture: Icon;
export const Pie: Icon;
export const Piece: Icon;
export const PiggyBank: Icon;
export const Pineapple: Icon;
export const PingPong: Icon;
export const PizzaSlice: Icon;
export const PlaneAlt: Icon;
export const Plane: Icon;
export const Plate: Icon;
export const PlayAlt: Icon;
export const PlayPause: Icon;
export const Play: Icon;
export const PlayingCards: Icon;
export const PlusSmall: Icon;
export const Plus: Icon;
export const PodiumStar: Icon;
export const Podium: Icon;
export const PokerChip: Icon;
export const Poo: Icon;
export const Popcorn: Icon;
export const Portrait: Icon;
export const Pot: Icon;
export const Pound: Icon;
export const Power: Icon;
export const Presentation: Icon;
export const Print: Icon;
export const Protractor: Icon;
export const Pulse: Icon;
export const Pumpkin: Icon;
export const Puzzle: Icon;
export const Pyramid: Icon;
export const Q: Icon;
export const Qrcode: Icon;
export const QuestionSquare: Icon;
export const Question: Icon;
export const QuoteRight: Icon;
export const R: Icon;
export const Racquet: Icon;
export const Radish: Icon;
export const Rainbow: Icon;
export const Raindrops: Icon;
export const Rec: Icon;
export const Receipt: Icon;
export const RecordVinyl: Icon;
export const RectabgleVertical: Icon;
export const RectangleBarcode: Icon;
export const RectangleCode: Icon;
export const RectangleHorizontal: Icon;
export const RectanglePanoramic: Icon;
export const RectangleXmark: Icon;
export const Recycle: Icon;
export const RedoAlt: Icon;
export const Redo: Icon;
export const Reflect: Icon;
export const Refresh: Icon;
export const Registered: Icon;
export const RemoveUser: Icon;
export const ReplyAll: Icon;
export const Republican: Icon;
export const Resize: Icon;
export const Resources: Icon;
export const Restaurant: Icon;
export const Rewind: Icon;
export const Rhombus: Icon;
export const RingsWedding: Icon;
export const Road: Icon;
export const RocketLunch: Icon;
export const Rocket: Icon;
export const RoomService: Icon;
export const RotateLeft: Icon;
export const RotateRight: Icon;
export const RubleSign: Icon;
export const Rugby: Icon;
export const RulerCombined: Icon;
export const RulerHorizontal: Icon;
export const RulerTriangle: Icon;
export const RulerVertical: Icon;
export const Running: Icon;
export const RupeeSign: Icon;
export const Rv: Icon;
export const S: Icon;
export const SackDollar: Icon;
export const Sack: Icon;
export const SadCry: Icon;
export const SadTear: Icon;
export const Sad: Icon;
export const Salad: Icon;
export const SaltPepper: Icon;
export const Sandwich: Icon;
export const Sauce: Icon;
export const Sausage: Icon;
export const Scale: Icon;
export const SchoolBus: Icon;
export const School: Icon;
export const Scissors: Icon;
export const Screen: Icon;
export const SearchAlt: Icon;
export const SearchDollar: Icon;
export const SearchHeart: Icon;
export const SearchLocation: Icon;
export const Search: Icon;
export const Security: Icon;
export const SensorAlert: Icon;
export const SensorFire: Icon;
export const SensorOn: Icon;
export const SensorSmoke: Icon;
export const Sensor: Icon;
export const SettingsSliders: Icon;
export const Settings: Icon;
export const Share: Icon;
export const ShekelSign: Icon;
export const ShieldCheck: Icon;
export const ShieldExclamation: Icon;
export const ShieldInterrogation: Icon;
export const ShieldPlus: Icon;
export const Shield: Icon;
export const ShipSide: Icon;
export const Ship: Icon;
export const Shop: Icon;
export const ShoppingBagAdd: Icon;
export const ShoppingBag: Icon;
export const ShoppingBasket: Icon;
export const ShoppingCartAdd: Icon;
export const ShoppingCartCheck: Icon;
export const ShoppingCart: Icon;
export const Shrimp: Icon;
export const Shuffle: Icon;
export const ShuttleVan: Icon;
export const Shuttlecock: Icon;
export const SidebarFlip: Icon;
export const Sidebar: Icon;
export const SignInAlt: Icon;
export const SignOutAlt: Icon;
export const SignalAlt1: Icon;
export const SignalAlt2: Icon;
export const SignalAlt: Icon;
export const Skateboard: Icon;
export const Skating: Icon;
export const Skewer: Icon;
export const SkiJump: Icon;
export const SkiLift: Icon;
export const SkiingNordic: Icon;
export const Skiing: Icon;
export const Sledding: Icon;
export const Sleigh: Icon;
export const Smartphone: Icon;
export const SmileBeam: Icon;
export const SmileWink: Icon;
export const Smile: Icon;
export const Smog: Icon;
export const Smoke: Icon;
export const SnowBlowing: Icon;
export const Snowboarding: Icon;
export const Snowflake: Icon;
export const Snowflakes: Icon;
export const Snowmobile: Icon;
export const Snowplow: Icon;
export const Soap: Icon;
export const SocialNetwork: Icon;
export const SortAlphaDownAlt: Icon;
export const SortAlphaDown: Icon;
export const SortAlphaUpAlt: Icon;
export const SortAlphaUp: Icon;
export const SortAlt: Icon;
export const SortAmountDownAlt: Icon;
export const SortAmountDown: Icon;
export const SortAmountUpAlt: Icon;
export const SortAmountUp: Icon;
export const SortDown: Icon;
export const SortNumericDownAlt: Icon;
export const SortNumericDown: Icon;
export const Sort: Icon;
export const Soup: Icon;
export const Spa: Icon;
export const SpaceShuttle: Icon;
export const Spade: Icon;
export const Sparkles: Icon;
export const Speaker: Icon;
export const Sphere: Icon;
export const Spinner: Icon;
export const Spoon: Icon;
export const Sport: Icon;
export const SquareCode: Icon;
export const SquareRoot: Icon;
export const SquareTerminal: Icon;
export const Square: Icon;
export const Stamp: Icon;
export const StarOctogram: Icon;
export const Star: Icon;
export const Starfighter: Icon;
export const Stars: Icon;
export const Stats: Icon;
export const Steak: Icon;
export const SteeringWheel: Icon;
export const Stethoscope: Icon;
export const Sticker: Icon;
export const Stop: Icon;
export const Stopwatch: Icon;
export const StoreAlt: Icon;
export const Strawberry: Icon;
export const Subtitles: Icon;
export const Subway: Icon;
export const SuitcaseAlt: Icon;
export const Summer: Icon;
export const Sun: Icon;
export const SunriseAlt: Icon;
export const Sunrise: Icon;
export const Sunset: Icon;
export const Surfing: Icon;
export const Surprise: Icon;
export const Sushi: Icon;
export const Swimmer: Icon;
export const Sword: Icon;
export const Symbol: Icon;
export const Syringe: Icon;
export const T: Icon;
export const TableColumns: Icon;
export const TableLayout: Icon;
export const TablePivot: Icon;
export const TableRows: Icon;
export const TableTree: Icon;
export const Tablet: Icon;
export const TachometerAltAverage: Icon;
export const TachometerAltFastest: Icon;
export const TachometerAltSlow: Icon;
export const TachometerAltSlowest: Icon;
export const TachometerAverage: Icon;
export const TachometerFast: Icon;
export const TachometerFastest: Icon;
export const TachometerSlow: Icon;
export const TachometerSlowest: Icon;
export const Tachometer: Icon;
export const Taco: Icon;
export const Tags: Icon;
export const Tally: Icon;
export const Target: Icon;
export const Taxi: Icon;
export const TemperatureDown: Icon;
export const TemperatureFrigid: Icon;
export const TemperatureHigh: Icon;
export const TemperatureLow: Icon;
export const TemperatureUp: Icon;
export const Tenge: Icon;
export const Tennis: Icon;
export const Terrace: Icon;
export const TestTube: Icon;
export const Test: Icon;
export const TextCheck: Icon;
export const TextSlash: Icon;
export const Text: Icon;
export const ThermometerHalf: Icon;
export const Thumbtack: Icon;
export const ThunderstormMoon: Icon;
export const ThunderstormSun: Icon;
export const Thunderstorm: Icon;
export const Ticket: Icon;
export const TimeAdd: Icon;
export const TimeCheck: Icon;
export const TimeDelete: Icon;
export const TimeFast: Icon;
export const TimeForwardSixty: Icon;
export const TimeForwardTen: Icon;
export const TimeForward: Icon;
export const TimeHalfPast: Icon;
export const TimeOclock: Icon;
export const TimePast: Icon;
export const TimeQuarterPast: Icon;
export const TimeQuarterTo: Icon;
export const TimeTwentyFour: Icon;
export const TireFlat: Icon;
export const TirePressureWarning: Icon;
export const TireRugged: Icon;
export const Tire: Icon;
export const Tired: Icon;
export const Tomato: Icon;
export const ToolBox: Icon;
export const ToolCrop: Icon;
export const ToolMarquee: Icon;
export const Tooth: Icon;
export const Tornado: Icon;
export const Tractor: Icon;
export const Trailer: Icon;
export const TrainSide: Icon;
export const Train: Icon;
export const Tram: Icon;
export const Transform: Icon;
export const Trash: Icon;
export const TreasureChest: Icon;
export const Treatment: Icon;
export const TreeChristmas: Icon;
export const Tree: Icon;
export const Triangle: Icon;
export const Trophy: Icon;
export const TruckContainer: Icon;
export const TruckCouch: Icon;
export const TruckLoading: Icon;
export const TruckMonster: Icon;
export const TruckMoving: Icon;
export const TruckPickup: Icon;
export const TruckPlow: Icon;
export const TruckRamp: Icon;
export const TruckSide: Icon;
export const Tty: Icon;
export const Turkey: Icon;
export const TvMusic: Icon;
export const Typewriter: Icon;
export const U: Icon;
export const Umbrella: Icon;
export const Underline: Icon;
export const UndoAlt: Icon;
export const Undo: Icon;
export const Unlock: Icon;
export const Upload: Icon;
export const UsbPendrive: Icon;
export const UsdCircle: Icon;
export const UsdSquare: Icon;
export const UserAdd: Icon;
export const UserTime: Icon;
export const User: Icon;
export const UsersAlt: Icon;
export const Users: Icon;
export const Utensils: Icon;
export const V: Icon;
export const VectorAlt: Icon;
export const Vector: Icon;
export const VenusDouble: Icon;
export const VenusMars: Icon;
export const Venus: Icon;
export const VideoArrowDownLeft: Icon;
export const VideoArrowUpRight: Icon;
export const VideoCameraAlt: Icon;
export const VideoCamera: Icon;
export const VideoPlus: Icon;
export const VideoSlash: Icon;
export const Volcano: Icon;
export const Volleyball: Icon;
export const Volume: Icon;
export const W: Icon;
export const WagonCovered: Icon;
export const Wallet: Icon;
export const WaterBottle: Icon;
export const WaterLower: Icon;
export const WaterRise: Icon;
export const Water: Icon;
export const Watermelon: Icon;
export const Wheat: Icon;
export const Wheelchair: Icon;
export const Whistle: Icon;
export const WifiAlt: Icon;
export const WindWarning: Icon;
export const Wind: Icon;
export const Windsock: Icon;
export const WomanHead: Icon;
export const World: Icon;
export const WrenchSimple: Icon;
export const X: Icon;
export const Y: Icon;
export const Yen: Icon;
export const Z: Icon;
export const ZoomIn: Icon;
export const ZoomOut: Icon;
