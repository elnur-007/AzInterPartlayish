const serviceTitles = [
  "Açıq mədən işlərində qazma-partlayış işləri",
  "Yeraltı mədənlərdə və yol tunellərinin tikintisində partlayış işləri",
  "Yol infrastruktur layihələrində qazma-partlayış işləri",
  "Ləğv etmə işləri",
  "Partlayıcı maddələrin poliqon və sənaye sınaqlarının aparılması işləri",
  "Konsaltinq", // EDIT
  "Açıq mədən işləri" // EDIT
];

const serviceDescriptions = [
  "“Azinterpartlayish-X” MMC fəaliyyəti dövründə Respublikada filiz mədənlərində, qeyri filiz tikinti materialları karyerlərində qazma-partlayış işləri üzrə fəaliyyət göstərmiş və hal-hazırda da istismarda olan dağ-mədən müəssisələrində qazma-partlayış işləri üzrə uğurlu fəaliyyətini davam etdirir. Şirkətimiz bu sahədə sifarişçinin tələblərinə uyğun işlərin yüksək səviyyədə icrası üçün zəngin texnika parkına və müasir partlayıcı maddə və vasitələrin idxalı imkanlarına malikdir.",

  "“Azinterpartlayish-X” MMC yüksək təcrübəyə malik mütəxəssislərin iştirakı ilə yeraltı mədənlərdə və yol tunel tikinti işlərində partlayış işləri icra edir. Bunlara misal olaraq Tovuz rayonunda yerləşən Qoşa qızıl mədənində (2014-cü il) partlayış işləri və hal hazırda tikintisi davam edən Toğanalı-Kəlbəcər yol tunelinin tikintisində partlayış işlərinin icrasını göstərmək olar.",

  "“Azinterpartlayish-X” MMC Respublika ərazisində icra olunan yol tikinti işlərində qazma-partlayış işləri üzrə fəaliyyətini davaç etdirir. Buna misal olaraq çətin dağ şəraitində icra olunan yol tikinti işlərini və işğaldan azad olunmuş ərazilərdə icra olunan böyük yol-tikinti infrastruktur layihələrinin icrasında qazma-partlayış işlərini göstərmək olar.",

  "Şirkətimiz istismar müddəti bitmiş sənaye tipli partlayıcı maddələrin təhlükəsizlik şəratində ləğv olunması işlərini icra edir. Bu işlərin icrası şirkətin balansında olan xüsusi olaraq ləğvetmə işləri üçün ayrılmış poliqon sahəsində yerinə yetirilir. Həmçinin şirkətimiz istismar müddəti yekunlaşmış zavodların boru konstruksiyalarının və istismar müddəti yekunlaşmış bina və kontruksiyaların partlayış vasitəsilə təhlükəsiz uçurulması işlərini icra edir.",
  
  "Şirkətimiz tərəfindən sənayedə sülhməramlı partlayış işlərinin aparılması məqsədilə istehsal olunmuş partlayıcı maddələrin poliqon və sənaye sınaqlarının aparılması işlərini icra edir. Poliqon sınaqları şirkətimizin balansında olan poliqon sahəsində, sənaye sınaqları isə ölkəmizin fərqli ərazilərində istismar olunan faydalı qazıntı yataqlarında şirkətimizin ixtisaslı və peşəkar mütəxəssisləri tərəfindən icra edilir."
];

function updateDescription(currentIndex) {
  $('p.service_data_desc').text(serviceDescriptions[currentIndex] || "No description available");
  $('h3.service_data_header').text(serviceTitles[currentIndex] || "No title available");
}

$('.services_list').on('init afterChange', function(event, slick, currentSlide){
    let current = currentSlide === undefined ? 0 : currentSlide;
    
    $('.services_list .slick-slide').removeClass('service_item_active');
    $('.services_list .slick-slide[data-slick-index="' + current + '"]').addClass('service_item_active');
    
    updateDescription(current);
});

$('.services_list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});