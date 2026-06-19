/* Love Language Test — Data
   Scoring:
   - Q1-Q10 (3 options): rank1=3pts, rank2=2pts, rank3=1pt per code
   - Q11   (5 options): rank1=5pts … rank5=1pt, used as tiebreaker only
   - Primary   = highest Q1-Q10 total (tiebreaker: Q11 pts, higher wins)
   - Secondary = second highest
*/

const LL = {

  // ─── QUESTION BANKS ──────────────────────────────────────────────────

  questions: {
    receiving: [
      {
        no: 1,
        skenario: 'Hari itu lumayan draining buat kamu. Hal yang paling bikin kamu ngerasa better adalah ketika pasanganmu…',
        options: [
          { code: 'A', text: 'bilang kalau dia bangga sama effort yang udah kamu lakuin' },
          { code: 'B', text: 'nemenin ngobrol cukup lama dan fokus dengerin kamu' },
          { code: 'C', text: 'ngirimin makanan atau hal kecil yang dia tahu kamu suka' }
        ],
        pola: ['A','B','C']
      },
      {
        no: 2,
        skenario: 'Belakangan kalian sama-sama lagi sibuk. Di tengah hectic-nya aktivitas itu, kamu paling ngerasa dicintai kalau pasanganmu…',
        options: [
          { code: 'B', text: 'menyempatkan waktu khusus untuk quality time bersamamu' },
          { code: 'D', text: 'membantu meringankan pekerjaan atau urusanmu' },
          { code: 'A', text: 'ngasih dukungan lewat kata-kata yang bikin kamu semangat lagi' }
        ],
        pola: ['B','D','A']
      },
      {
        no: 3,
        skenario: 'Setelah cukup lama hanya berkomunikasi lewat chat, akhirnya kalian punya kesempatan bertemu lagi. Momen yang paling bikin kamu merasa dekat dengannya adalah ketika dia…',
        options: [
          { code: 'E', text: 'langsung memeluk atau menggenggam tanganmu' },
          { code: 'B', text: 'fokus menikmati waktu berdua tanpa sibuk dengan hal lain' },
          { code: 'A', text: 'muji kamu dan bilang kalau dia kangen banget sama kamu' }
        ],
        pola: ['E','B','A']
      },
      {
        no: 4,
        skenario: 'Suatu malam kamu sedang banyak pikiran dan merasa overthinking tentang sesuatu. Dalam situasi seperti itu, yang paling bikin kamu merasa didukung adalah ketika pasanganmu…',
        options: [
          { code: 'C', text: 'membelikan makanan kesukaan untuk memperbaiki mood-mu' },
          { code: 'D', text: 'membantu mencari solusi atau meringankan masalahmu' },
          { code: 'A', text: 'ngasih kata-kata yang bikin kamu ngerasa nggak sendirian' }
        ],
        pola: ['C','D','A']
      },
      {
        no: 5,
        skenario: 'Saat kalian sedang menikmati perjalanan atau waktu santai bersama, kamu paling merasa hubungan ini berarti ketika pasanganmu…',
        options: [
          { code: 'E', text: 'menunjukkan kedekatan lewat sentuhan hangat selama bersama' },
          { code: 'A', text: 'mengungkapkan hal-hal yang dia sukai dari dirimu' },
          { code: 'C', text: 'memberikan sesuatu yang spesial untukmu' }
        ],
        pola: ['E','A','C']
      },
      {
        no: 6,
        skenario: 'Belakangan ini kamu mulai merasa lelah dengan rutinitas yang berjalan terus-menerus. Di kondisi seperti itu, yang paling bikin kamu merasa tenang adalah ketika pasanganmu…',
        options: [
          { code: 'D', text: 'membantu hal-hal kecil tanpa perlu diminta' },
          { code: 'A', text: 'memberi kata-kata yang menenangkan dan meyakinkanmu' },
          { code: 'E', text: 'memelukmu atau menenangkanmu lewat sentuhan fisik' }
        ],
        pola: ['D','A','E']
      },
      {
        no: 7,
        skenario: 'Di akhir minggu, kalian akhirnya punya waktu untuk menghabiskan hari bersama. Hal yang paling bikin kamu merasa diperhatikan adalah ketika pasanganmu…',
        options: [
          { code: 'B', text: 'menikmati waktu santai bersamamu tanpa terburu-buru' },
          { code: 'C', text: 'membawa sesuatu yang dia tahu kamu suka' },
          { code: 'D', text: 'membantu mengurus hal-hal yang biasanya bikin kamu repot' }
        ],
        pola: ['B','C','D']
      },
      {
        no: 8,
        skenario: 'Saat sedang jalan bersama di suatu tempat, kamu paling merasa dekat dengan pasanganmu ketika dia…',
        options: [
          { code: 'C', text: 'memberikan hadiah kecil secara spontan' },
          { code: 'E', text: 'menggandeng tangan atau menunjukkan kontak fisik hangat' },
          { code: 'B', text: 'benar-benar fokus mendengarkan cerita dan pengalamanmu' }
        ],
        pola: ['C','E','B']
      },
      {
        no: 9,
        skenario: 'Suatu hari mood-mu sedang kurang baik dan kamu jadi lebih sensitif dari biasanya. Dalam situasi itu, yang paling bikin kamu merasa didukung adalah ketika pasanganmu…',
        options: [
          { code: 'D', text: 'membantu menyelesaikan hal-hal yang sedang membebanimu' },
          { code: 'E', text: 'menenangkanmu lewat pelukan atau sentuhan fisik' },
          { code: 'B', text: 'tetap menemani kamu walaupun suasananya sedang tidak nyaman' }
        ],
        pola: ['D','E','B']
      },
      {
        no: 10,
        skenario: 'Di momen spesial yang kalian rayakan bersama, hal yang paling bikin kamu merasa dicintai adalah ketika pasanganmu…',
        options: [
          { code: 'C', text: 'menyiapkan sesuatu yang terasa spesial dan personal untukmu' },
          { code: 'D', text: 'berusaha memastikan semuanya berjalan nyaman dan lancar buatmu' },
          { code: 'E', text: 'menunjukkan kedekatan lewat sentuhan hangat selama bersama' }
        ],
        pola: ['C','D','E']
      },
      {
        no: 11,
        skenario: 'Pas kamu lagi ada di titik paling capek dan ngerasa semuanya berantakan, hal yang paling bikin kamu ngerasa "dia beneran sayang sama aku" adalah ketika pasanganmu…',
        options: [
          { code: 'A', text: 'bilang kalau dia bangga sama cara kamu bertahan sejauh ini' },
          { code: 'B', text: 'tetap nemenin kamu dan dengerin cerita kamu sampai kamu lebih tenang' },
          { code: 'C', text: 'tiba-tiba ngirimin makanan, playlist, atau hal kecil yang kamu suka' },
          { code: 'D', text: 'bantu nyelesaiin atau ngurangin hal yang lagi bikin kamu stres' },
          { code: 'E', text: 'meluk, genggam tangan, atau nenangin kamu lewat sentuhan fisik' }
        ],
        pola: ['A','B','C','D','E']
      }
    ],

    giving: [
      {
        no: 1,
        skenario: 'Di momen spesial yang kalian rayakan bersama, cara kamu menunjukkan rasa sayang ke pasangan adalah dengan…',
        options: [
          { code: 'C', text: 'menyiapkan sesuatu yang terasa spesial dan personal untuknya' },
          { code: 'D', text: 'berusaha memastikan semuanya berjalan nyaman dan lancar buat dia' },
          { code: 'E', text: 'menunjukkan kedekatan lewat sentuhan hangat selama bersama' }
        ],
        pola: ['C','D','E']
      },
      {
        no: 2,
        skenario: 'Suatu hari mood pasanganmu sedang kurang baik dan dia jadi lebih sensitif dari biasanya. Cara kamu menunjukkan dukungan adalah dengan…',
        options: [
          { code: 'D', text: 'membantu menyelesaikan hal-hal yang sedang membebaninya' },
          { code: 'E', text: 'menenangkan dia lewat pelukan atau sentuhan fisik' },
          { code: 'B', text: 'tetap menemani dia walaupun suasananya sedang tidak nyaman' }
        ],
        pola: ['D','E','B']
      },
      {
        no: 3,
        skenario: 'Saat sedang jalan bersama di suatu tempat, cara kamu membuat pasangan merasa dekat denganmu adalah dengan…',
        options: [
          { code: 'C', text: 'memberikan hadiah kecil secara spontan' },
          { code: 'E', text: 'menggandeng tangan atau menunjukkan kontak fisik hangat' },
          { code: 'B', text: 'benar-benar fokus mendengarkan cerita dan pengalamannya' }
        ],
        pola: ['C','E','B']
      },
      {
        no: 4,
        skenario: 'Di akhir minggu, kalian akhirnya punya waktu untuk menghabiskan hari bersama. Cara kamu menunjukkan perhatian ke pasangan adalah dengan…',
        options: [
          { code: 'B', text: 'menikmati waktu santai bersamanya tanpa terburu-buru' },
          { code: 'C', text: 'membawa sesuatu yang kamu tahu dia suka' },
          { code: 'D', text: 'membantu mengurus hal-hal yang biasanya bikin dia repot' }
        ],
        pola: ['B','C','D']
      },
      {
        no: 5,
        skenario: 'Belakangan pasanganmu mulai terlihat lelah dengan rutinitas yang berjalan terus-menerus. Cara kamu membuat dia merasa lebih tenang adalah dengan…',
        options: [
          { code: 'D', text: 'membantu hal-hal kecil tanpa perlu dia minta' },
          { code: 'A', text: 'memberi kata-kata yang menenangkan dan meyakinkan dia' },
          { code: 'E', text: 'memeluk atau menenangkan dia lewat sentuhan fisik' }
        ],
        pola: ['D','A','E']
      },
      {
        no: 6,
        skenario: 'Saat kalian sedang menikmati perjalanan atau waktu santai bersama, cara kamu menunjukkan kalau hubungan ini berarti buatmu adalah dengan…',
        options: [
          { code: 'E', text: 'menunjukkan kedekatan lewat sentuhan hangat selama bersama' },
          { code: 'A', text: 'mengungkapkan hal-hal yang kamu sukai dari dirinya' },
          { code: 'C', text: 'memberikan sesuatu yang spesial untuknya' }
        ],
        pola: ['E','A','C']
      },
      {
        no: 7,
        skenario: 'Suatu malam pasanganmu lagi banyak pikiran dan overthinking tentang sesuatu. Cara kamu paling natural menunjukkan dukungan adalah dengan…',
        options: [
          { code: 'C', text: 'membelikan makanan kesukaannya untuk bantu naikin mood-nya' },
          { code: 'D', text: 'membantu mencari solusi atau meringankan masalahnya' },
          { code: 'A', text: 'ngasih kata-kata yang bikin dia ngerasa nggak sendirian' }
        ],
        pola: ['C','D','A']
      },
      {
        no: 8,
        skenario: 'Setelah cukup lama hanya komunikasi lewat chat, akhirnya kalian punya kesempatan bertemu lagi. Cara kamu menunjukkan rasa kangen dan sayang adalah dengan…',
        options: [
          { code: 'E', text: 'langsung memeluk atau menggenggam tangannya' },
          { code: 'B', text: 'fokus menikmati waktu berdua tanpa sibuk dengan hal lain' },
          { code: 'A', text: 'muji dia dan bilang kalau kamu kangen banget sama dia' }
        ],
        pola: ['E','B','A']
      },
      {
        no: 9,
        skenario: 'Belakangan kalian sama-sama lagi sibuk. Di tengah hectic-nya aktivitas itu, cara kamu menunjukkan rasa sayang ke pasangan adalah dengan…',
        options: [
          { code: 'B', text: 'menyempatkan waktu khusus buat quality time bareng dia' },
          { code: 'D', text: 'membantu meringankan pekerjaan atau urusan yang lagi bikin dia capek' },
          { code: 'A', text: 'ngasih dukungan lewat kata-kata yang bikin dia semangat lagi' }
        ],
        pola: ['B','D','A']
      },
      {
        no: 10,
        skenario: 'Hari itu pasanganmu kelihatan capek banget. Hal yang paling spontan kamu lakukan buat bikin dia ngerasa lebih baik adalah…',
        options: [
          { code: 'A', text: 'bilang kalau kamu bangga sama cara dia bertahan hari itu' },
          { code: 'B', text: 'nemenin dia ngobrol cukup lama dan fokus dengerin ceritanya' },
          { code: 'C', text: 'ngirimin makanan atau hal kecil yang kamu tahu dia suka' }
        ],
        pola: ['A','B','C']
      },
      {
        no: 11,
        skenario: 'Pas pasanganmu lagi ada di titik paling capek dan ngerasa semuanya berantakan, cara kamu menunjukkan "aku ada buat kamu" adalah dengan…',
        options: [
          { code: 'A', text: 'bilang kalau kamu bangga sama cara dia bertahan sejauh ini' },
          { code: 'B', text: 'tetap nemenin dia dan dengerin ceritanya sampai dia lebih tenang' },
          { code: 'C', text: 'tiba-tiba ngirimin makanan, playlist, atau hal kecil yang dia suka' },
          { code: 'D', text: 'bantu nyelesaiin atau ngurangin hal yang lagi bikin dia stres' },
          { code: 'E', text: 'meluk, genggam tangan, atau nenangin dia lewat sentuhan fisik' }
        ],
        pola: ['A','B','C','D','E']
      }
    ]
  },

  // ─── LOVE LANGUAGE PROFILES ──────────────────────────────────────────

  codes: {
    A: { label: 'Words of Affirmation', emoji: '💬', color: '#9B7FD4' },
    B: { label: 'Quality Time',         emoji: '⏳', color: '#6B9BD2' },
    C: { label: 'Receiving Gifts',       emoji: '🎁', color: '#D47FAA' },
    D: { label: 'Acts of Service',       emoji: '🤝', color: '#7FBD8C' },
    E: { label: 'Physical Touch',        emoji: '🤗', color: '#D49B7F' }
  },

  library: {
    receiving: {
      A: {
        label: 'Words of Affirmation',
        emoji: '💬',
        bg: "url('assets/words-of-affirmation.png') center/cover no-repeat",
        tagline: '"Kata-kata yang tulus bisa bikin hati kamu hangat seketika."',
        deskripsiSingkat: 'Kamu paling gampang luluh lewat kata-kata yang bikin kamu ngerasa dihargai, dipahami, dan berarti buat seseorang.',
        yangBikinLuluh: ['Dipuji dan dibuat ngerasa spesial', 'Dikasih kata-kata yang bikin semangat', 'Denger pasangan bilang kalau dia bangga sama kamu'],
        yangBikinNggakDianggap: ['Jarang diapresiasi atau dipuji', 'Kata-kata pasangan terasa dingin atau cuek', 'Usaha kamu dianggap biasa aja'],
        greenFlag: ['Nggak gengsi buat muji dan apresiasi kamu', 'Komunikatif dan tahu cara nenangin kamu lewat kata-kata', 'Sering ngasih reassurance tanpa kamu harus minta'],
        deskripsi: 'Buat kamu, ucapan sederhana seperti dipuji, diapresiasi, diyakinin, atau dibilang "aku bangga sama kamu" bisa punya dampak besar banget. Kamu cenderung mengingat hal-hal yang pasanganmu omongin, terutama kalau itu bikin kamu merasa dihargai dan dipahami. Di hubungan, kamu nyaman sama pasangan yang ekspresif, komunikatif, dan nggak gengsi buat nunjukin rasa sayangnya lewat kata-kata.'
      },
      B: {
        label: 'Quality Time',
        emoji: '⏳',
        bg: "url('assets/quality-time.png') center/cover no-repeat",
        tagline: '"Waktu bareng yang benar-benar hadir lebih berarti dari seribu pesan."',
        deskripsiSingkat: 'Kamu paling nyaman dengan orang yang benar-benar hadir dan bikin kamu ngerasa diprioritaskan.',
        yangBikinLuluh: ['Dia fokus dengerin cerita kamu', 'Nyempetin waktu walaupun lagi sibuk', 'Quality time tanpa distraksi'],
        yangBikinNggakDianggap: ['Lagi ngobrol tapi dia sibuk sendiri', 'Selalu terlalu sibuk buat nyempetin waktu', 'Bareng tapi rasanya nggak benar-benar hadir'],
        greenFlag: ['Nyempetin waktu walaupun lagi sibuk', 'Fokus dan benar-benar dengerin kamu pas ngobrol', 'Bikin kamu merasa diprioritasin saat lagi bareng'],
        deskripsi: 'Buat kamu, rasa sayang paling kerasa ketika seseorang benar-benar hadir buat kamu. Hal kecil seperti didengerin dengan serius, ditemenin tanpa distraksi, atau disempetin waktu walaupun lagi sibuk bisa bikin kamu merasa sangat diprioritasin. Di hubungan, kamu nyaman sama pasangan yang bikin momen kebersamaan terasa hangat dan meaningful.'
      },
      C: {
        label: 'Receiving Gifts',
        emoji: '🎁',
        bg: "url('assets/receiving-gifts.png') center/cover no-repeat",
        tagline: '"Bukan soal hadiahnya — tapi perasaan bahwa dia kepikiran kamu."',
        deskripsiSingkat: 'Buat kamu, perhatian kecil yang terasa personal bisa bikin kamu ngerasa benar-benar disayangi.',
        yangBikinLuluh: ['Dikasih hal kecil yang bikin kamu ngerasa dipikirin', 'Pasangan inget hal-hal kecil yang kamu suka', 'Tiba-tiba dibawain sesuatu yang kamu suka'],
        yangBikinNggakDianggap: ['Pasangan terlihat nggak inget hal-hal kecil tentang kamu', 'Perhatian atau effort terasa minim', 'Momen spesial terasa biasa aja dan nggak dipikirin'],
        greenFlag: ['Inget detail kecil tentang apa yang kamu suka', 'Suka ngasih perhatian random yang terasa personal', 'Effort bikin momen kecil terasa spesial'],
        deskripsi: 'Buat kamu, perhatian kecil yang terasa personal bisa jadi bentuk cinta yang paling ngena. Bukan soal mahal atau besarnya hadiah, tapi tentang feeling "dia kepikiran aku." Kamu gampang tersentuh sama pasangan yang inget hal-hal kecil tentang kamu dan nunjukinnya lewat sesuatu yang dipersiapkan khusus untukmu.'
      },
      D: {
        label: 'Acts of Service',
        emoji: '🤝',
        bg: "url('assets/act-of-service.png') center/cover no-repeat",
        tagline: '"Cinta paling terasa lewat tindakan nyata, bukan janji."',
        deskripsiSingkat: 'Kamu paling tersentuh sama effort nyata yang bikin hidup kamu terasa lebih ringan.',
        yangBikinLuluh: ['Dianter atau dijemput pas kamu lagi capek', 'Dibantu ngerjain atau nyelesaiin hal yang lagi numpuk', 'Pasangan langsung bantu waktu lihat kamu lagi kewalahan'],
        yangBikinNggakDianggap: ['Kamu selalu ngurus semuanya sendiri', 'Pas lagi kewalahan tapi dia cuma diam aja', 'Dia jarang bantu walaupun tahu kamu lagi capek'],
        greenFlag: ['Langsung gerak bantu tanpa nunggu diminta', 'Peka waktu kamu lagi capek atau kewalahan', 'Nunjukin rasa sayang lewat effort nyata, bukan cuma kata-kata'],
        deskripsi: 'Buat kamu, rasa sayang paling terasa lewat tindakan nyata dan effort kecil yang bikin hidup kamu lebih ringan. Hal-hal seperti dibantu pas lagi capek, dianterin, atau pasangan yang langsung gerak bantu tanpa harus diminta bisa bikin kamu merasa sangat diperhatikan. Di hubungan, kamu nyaman sama orang yang nunjukin cinta lewat aksi, bukan cuma kata-kata.'
      },
      E: {
        label: 'Physical Touch',
        emoji: '🤗',
        bg: "url('assets/physical-touch.png') center/cover no-repeat",
        tagline: '"Pelukan yang tepat waktu bisa bilang hal yang nggak bisa diucapkan."',
        deskripsiSingkat: 'Buat kamu, rasa sayang paling kerasa lewat kedekatan dan sentuhan fisik yang bikin nyaman dan tenang.',
        yangBikinLuluh: ['Dipeluk pas kamu lagi butuh tenang', 'Digandeng atau disentuh kecil pas lagi bareng', 'Kedekatan fisik yang bikin kamu ngerasa nyaman dan aman'],
        yangBikinNggakDianggap: ['Pasangan terasa menjaga jarak secara fisik', 'Jarang ada pelukan atau sentuhan kecil', 'Kedekatan terasa dingin dan kurang hangat'],
        greenFlag: ['Hangat dan nyaman secara fisik', 'Nggak ragu nunjukin affection lewat sentuhan kecil', 'Bikin kamu merasa aman lewat kedekatan fisik'],
        deskripsi: 'Buat kamu, kedekatan fisik punya arti yang besar dalam hubungan. Pelukan, gandengan tangan, sandaran kecil, atau sentuhan hangat bisa bikin kamu merasa lebih tenang dan dekat secara emosional dengan pasanganmu. Di hubungan, kamu nyaman sama pasangan yang ekspresif secara fisik dan bikin kamu merasa aman lewat kedekatan itu.'
      }
    },
    giving: {
      A: {
        label: 'Words of Affirmation',
        emoji: '💬',
        bg: "url('assets/words-of-affirmation.png') center/cover no-repeat",
        tagline: '"Kata-kata yang tulus adalah cara terbaikmu untuk bilang sayang."',
        deskripsiSingkat: 'Kamu paling natural menunjukkan sayang lewat kata-kata yang bikin orang lain merasa dihargai, dipahami, dan berarti buat kamu.',
        caraMenunjukkan: ['Ngirim pesan penyemangat pas dia lagi capek', 'Muji usaha, penampilan, atau hal kecil yang dia lakukan', 'Bilang secara langsung kalau kamu bangga dan sayang sama dia'],
        yangBikinStruggle: ['Kadang bingung merangkai kata yang pas buat nunjukin perasaan', 'Takut terdengar terlalu cheesy saat mau muji', 'Lebih mudah mikirin kata-katanya daripada benar-benar ngomong langsung'],
        greenFlag: ['Kamu bisa bikin pasangan merasa dihargai lewat kata-kata', 'Kamu cukup peka buat ngasih dukungan saat dia butuh dikuatkan', 'Kamu tahu cara bikin pasangan merasa berarti lewat apresiasi kecil'],
        deskripsi: 'Saat sayang sama seseorang, kamu cenderung menunjukkannya lewat kata-kata yang tulus dan menguatkan. Kamu bisa jadi orang yang suka ngasih pujian, apresiasi, reassurance, atau bilang hal-hal yang bikin pasangan merasa dihargai dan berarti buat kamu. Buatmu, kata-kata bukan cuma pemanis, tapi cara untuk menunjukkan kalau kamu benar-benar peduli dan memperhatikan perasaannya.'
      },
      B: {
        label: 'Quality Time',
        emoji: '⏳',
        bg: "url('assets/quality-time.png') center/cover no-repeat",
        tagline: '"Hadir sepenuhnya adalah hadiah terbesar yang bisa kamu berikan."',
        deskripsiSingkat: 'Kamu menunjukkan sayang dengan cara hadir sepenuhnya, meluangkan waktu, dan bikin orang yang kamu sayang merasa diprioritaskan.',
        caraMenunjukkan: ['Sengaja kosongin waktu buat ketemu atau ngobrol', 'Nemenin dia tanpa sibuk main HP sendiri', 'Ngajak quality time sederhana, kayak makan, jalan, atau ngobrol santai'],
        yangBikinStruggle: ['Kadang susah nyisihin waktu saat aktivitas lagi padat', 'Bisa terlihat cuek kalau lagi sibuk, padahal sebenarnya tetap peduli', 'Nggak selalu gampang hadir penuh saat pikiranmu lagi banyak'],
        greenFlag: ['Kamu bisa hadir penuh saat sedang bersama pasangan', 'Kamu mau nyempetin waktu untuk orang yang kamu sayang', 'Kamu bikin momen sederhana terasa hangat dan meaningful'],
        deskripsi: 'Saat menunjukkan rasa sayang, kamu cenderung hadir lewat waktu dan perhatian penuh. Kamu bisa menunjukkan cinta dengan nyempetin waktu, fokus mendengarkan cerita pasangan, atau menciptakan momen kebersamaan yang nyaman tanpa distraksi. Buatmu, memberi waktu adalah cara untuk bilang bahwa orang tersebut penting dan layak diprioritaskan.'
      },
      C: {
        label: 'Gift-giving',
        emoji: '🎁',
        bg: "url('assets/receiving-gifts.png') center/cover no-repeat",
        tagline: '"Hadiah kecil yang tepat bisa bilang hal yang susah diucapkan."',
        deskripsiSingkat: 'Kamu suka menunjukkan perhatian lewat hal kecil yang terasa personal, supaya orang yang kamu sayang merasa dipikirin dan diperhatikan.',
        caraMenunjukkan: ['Tiba-tiba bawain makanan, minuman, atau barang kecil yang dia suka', 'Nyiapin kejutan kecil yang terasa personal buat dia', 'Ngasih sesuatu yang kamu pilih karena inget detail kecil tentang dia'],
        yangBikinStruggle: ['Kadang bingung memilih hal yang benar-benar terasa personal buat pasangan', 'Takut perhatian kecilmu dianggap biasa aja atau kurang berarti', 'Bisa terlalu mikirin "dia bakal suka nggak ya?" sebelum ngasih sesuatu'],
        greenFlag: ['Kamu perhatian sama detail kecil yang pasangan suka', 'Kamu suka nunjukin sayang lewat hal-hal kecil yang personal', 'Kamu bisa bikin pasangan merasa dipikirin lewat kejutan sederhana'],
        deskripsi: 'Saat sayang sama seseorang, kamu suka menunjukkannya lewat perhatian kecil yang terasa personal. Kamu bisa tiba-tiba membawakan sesuatu yang dia suka, menyiapkan hal sederhana yang mengingatkanmu padanya, atau memberi sesuatu yang kamu pilih dengan penuh perhatian. Buatmu, hadiah bukan soal mahal atau besar, tapi cara untuk menunjukkan bahwa dia kepikiran dan punya tempat spesial di hidupmu.'
      },
      D: {
        label: 'Acts of Service',
        emoji: '🤝',
        bg: "url('assets/act-of-service.png') center/cover no-repeat",
        tagline: '"Cinta yang paling kamu mengerti adalah yang diwujudkan lewat tindakan."',
        deskripsiSingkat: 'Kamu menunjukkan sayang lewat effort nyata, bantuan kecil, dan tindakan yang bikin hidup orang yang kamu sayang terasa lebih ringan.',
        caraMenunjukkan: ['Bantu ngurus hal praktis pas dia lagi capek atau kewalahan', 'Nganter, jemput, atau nemenin dia saat ada urusan penting', 'Langsung bantu beresin sesuatu tanpa nunggu dia minta duluan'],
        yangBikinStruggle: ['Kadang terlalu fokus bantuin sampai lupa mengungkapkan perasaan', 'Bisa merasa sudah nunjukin sayang lewat tindakan, tapi nggak selalu menjelaskannya', 'Kadang capek sendiri karena pengen banyak membantu'],
        greenFlag: ['Kamu peka saat pasangan mulai capek atau kewalahan', 'Kamu cepat turun tangan saat melihat ada yang bisa dibantu', 'Kamu menunjukkan sayang lewat effort nyata, bukan cuma kata-kata'],
        deskripsi: 'Saat menunjukkan rasa sayang, kamu cenderung melakukannya lewat tindakan nyata. Kamu bisa langsung membantu ketika pasangan terlihat capek, mengurus hal-hal kecil yang bikin dia kewalahan, atau melakukan sesuatu yang membuat harinya terasa lebih ringan. Buatmu, cinta paling terasa ketika diwujudkan lewat effort, bantuan, dan kepedulian yang kelihatan dalam tindakan sehari-hari.'
      },
      E: {
        label: 'Physical Touch',
        emoji: '🤗',
        bg: "url('assets/physical-touch.png') center/cover no-repeat",
        tagline: '"Kedekatanmu yang hangat bikin orang merasa aman dan dicintai."',
        deskripsiSingkat: 'Kamu paling natural menunjukkan rasa sayang lewat kedekatan fisik, sentuhan hangat, dan affection yang bikin hubungan terasa nyaman dan dekat.',
        caraMenunjukkan: ['Meluk dia pas kelihatan butuh ditenangin', 'Gandeng tangan atau duduk dekat saat lagi bareng', 'Nunjukin affection lewat sentuhan kecil yang hangat dan natural'],
        yangBikinStruggle: ['Kadang ragu menunjukkan affection fisik kalau belum yakin pasangan nyaman', 'Sulit mengekspresikan sayang lewat kata-kata', 'Bisa lebih memilih sentuhan daripada ngobrol panjang'],
        greenFlag: ['Kamu hangat dan nyaman dalam menunjukkan kedekatan', 'Kamu bisa bikin pasangan merasa dekat lewat sentuhan kecil', 'Kamu menunjukkan sayang lewat affection yang natural dan tulus'],
        deskripsi: 'Saat sayang sama seseorang, kamu cenderung menunjukkannya lewat kedekatan fisik yang hangat dan natural. Pelukan, genggaman tangan, sandaran kecil, atau sentuhan sederhana bisa jadi cara kamu mengekspresikan perhatian dan rasa dekat. Buatmu, affection fisik adalah cara untuk membuat hubungan terasa lebih nyaman, aman, dan terhubung secara emosional.'
      }
    }
  },

  // ─── KOMBINASI (25 profiles) ──────────────────────────────────────────

  kombinasi: {
    'A-A': { type: 'Si paling butuh Reassurance',            narasi: 'Receiving-mu dan Giving-mu sama-sama kuat di kata-kata. Kamu paling nyaman dicintai lewat ucapan yang bikin kamu merasa dihargai, dan kamu juga natural menunjukkan sayang lewat pujian, dukungan, atau reassurance. Buat kamu, kata-kata yang tulus bisa jadi jembatan utama untuk merasa dekat dan terhubung.' },
    'A-B': { type: 'Si butuh diyakinin, ekspresi lewat Kehadiran', narasi: 'Receiving-mu lebih ke kata-kata yang menguatkan, sedangkan Giving-mu lebih ke kehadiran. Kamu paling nyaman dicintai lewat ucapan yang bikin kamu merasa dihargai, tapi saat menunjukkan sayang, kamu cenderung hadir, meluangkan waktu, dan menemani orang yang kamu sayang.' },
    'A-C': { type: 'Si luluh lewat kata, ekspresi lewat Hadiah', narasi: 'Receiving-mu lebih ke kata-kata, sedangkan Giving-mu lebih ke perhatian kecil yang personal. Kamu paling nyaman dicintai lewat pujian, apresiasi, atau reassurance, tapi saat menunjukkan sayang, kamu cenderung memberi sesuatu yang menunjukkan bahwa kamu kepikiran orang tersebut.' },
    'A-D': { type: 'Si butuh Validasi, ekspresi lewat Effort', narasi: 'Receiving-mu lebih ke kata-kata yang menguatkan, sedangkan Giving-mu lebih ke tindakan nyata. Kamu paling nyaman dicintai lewat ucapan yang bikin kamu merasa dihargai, tapi saat menunjukkan sayang, kamu cenderung membantu, meringankan beban, atau melakukan effort kecil untuk orang yang kamu sayang.' },
    'A-E': { type: 'Si butuh Kata manis, ekspresi lewat Pelukan', narasi: 'Receiving-mu lebih ke kata-kata, sedangkan Giving-mu lebih ke kedekatan fisik. Kamu paling nyaman dicintai lewat ucapan yang membuatmu merasa berarti, tapi saat menunjukkan sayang, kamu lebih natural mengekspresikannya lewat pelukan, sentuhan kecil, atau affection yang hangat.' },
    'B-A': { type: 'Si butuh Ditemenin, ekspresi lewat Kata', narasi: 'Receiving-mu lebih ke kehadiran, sedangkan Giving-mu lebih ke kata-kata. Kamu paling nyaman dicintai lewat waktu berkualitas dan perhatian penuh, tapi saat menunjukkan sayang, kamu cenderung memakai kata-kata yang menguatkan, memuji, atau bikin orang yang kamu sayang merasa berarti.' },
    'B-B': { type: 'Si paling Quality Time',                  narasi: 'Receiving-mu dan Giving-mu sama-sama kuat di kehadiran. Kamu paling nyaman dicintai lewat waktu berkualitas, dan kamu juga menunjukkan sayang dengan cara hadir, menemani, dan memberi perhatian penuh. Buat kamu, cinta paling terasa ketika ada waktu yang benar-benar disediakan untuk satu sama lain.' },
    'B-C': { type: 'Si butuh kehadiran penuh, ekspresi lewat Hadiah', narasi: 'Receiving-mu lebih ke kehadiran, sedangkan Giving-mu lebih ke perhatian kecil yang personal. Kamu paling nyaman dicintai lewat waktu berkualitas dan perhatian penuh, tapi saat menunjukkan sayang, kamu cenderung memberi hal kecil yang menunjukkan bahwa kamu kepikiran orang tersebut.' },
    'B-D': { type: 'Si butuh Ditemenin, ekspresi lewat Effort', narasi: 'Receiving-mu lebih ke kehadiran, sedangkan Giving-mu lebih ke tindakan nyata. Kamu paling nyaman dicintai lewat waktu berkualitas, tapi paling natural menunjukkan sayang lewat bantuan, effort, dan hal-hal kecil yang bikin hidup orang yang kamu sayang terasa lebih ringan.' },
    'B-E': { type: 'Si butuh Ditemenin, ekspresi lewat Pelukan', narasi: 'Receiving-mu lebih ke kehadiran, sedangkan Giving-mu lebih ke kedekatan fisik. Kamu paling nyaman dicintai lewat waktu berkualitas dan perhatian penuh, tapi saat menunjukkan sayang, kamu cenderung memberi pelukan, sentuhan kecil, atau affection yang bikin hubungan terasa hangat.' },
    'C-A': { type: 'Si luluh lewat perhatian kecil, ekspresi lewat Kata', narasi: 'Receiving-mu lebih ke perhatian kecil yang personal, sedangkan Giving-mu lebih ke kata-kata. Kamu paling nyaman dicintai lewat hal-hal sederhana yang bikin kamu merasa dipikirin, tapi saat menunjukkan sayang, kamu cenderung memakai pujian, apresiasi, atau reassurance.' },
    'C-B': { type: 'Si butuh perhatian kecil, ekspresi lewat Hadir', narasi: 'Receiving-mu lebih ke perhatian kecil yang personal, sedangkan Giving-mu lebih ke kehadiran. Kamu paling nyaman dicintai lewat hal sederhana yang menunjukkan bahwa kamu dipikirin, tapi saat menunjukkan sayang, kamu cenderung hadir, meluangkan waktu, dan memberi perhatian penuh.' },
    'C-C': { type: 'Si Thoughtful banget',                    narasi: 'Receiving-mu dan Giving-mu sama-sama kuat di perhatian kecil yang personal. Kamu paling nyaman dicintai lewat hal-hal sederhana yang bikin kamu merasa dipikirin, dan kamu juga natural menunjukkan sayang dengan memberi sesuatu yang terasa personal dan thoughtful.' },
    'C-D': { type: 'Si luluh lewat Hal Kecil, ekspresi lewat Effort', narasi: 'Receiving-mu lebih ke perhatian kecil yang personal, sedangkan Giving-mu lebih ke tindakan nyata. Kamu paling nyaman dicintai lewat hal sederhana yang menunjukkan bahwa kamu dipikirin, tapi saat menunjukkan sayang, kamu cenderung membantu, meringankan beban, atau melakukan effort nyata.' },
    'C-E': { type: 'Si butuh perhatian kecil, ekspresi lewat Pelukan', narasi: 'Receiving-mu lebih ke perhatian kecil yang personal, sedangkan Giving-mu lebih ke kedekatan fisik. Kamu paling nyaman dicintai lewat hal-hal sederhana yang terasa thoughtful, tapi saat menunjukkan sayang, kamu lebih natural lewat pelukan, genggaman tangan, atau sentuhan hangat.' },
    'D-A': { type: 'Si luluh lewat Effort, ekspresi lewat Kata', narasi: 'Receiving-mu lebih ke tindakan nyata, sedangkan Giving-mu lebih ke kata-kata. Kamu paling nyaman dicintai lewat bantuan dan effort yang bikin hidupmu terasa lebih ringan, tapi saat menunjukkan sayang, kamu cenderung memberi kata-kata yang mendukung, menenangkan, atau menguatkan.' },
    'D-B': { type: 'Si butuh Effort nyata, ekspresi lewat Hadir', narasi: 'Receiving-mu lebih ke tindakan nyata, sedangkan Giving-mu lebih ke kehadiran. Kamu paling nyaman dicintai lewat bantuan dan effort kecil, tapi saat menunjukkan sayang, kamu cenderung hadir, menemani, dan meluangkan waktu untuk orang yang kamu sayang.' },
    'D-C': { type: 'Si luluh lewat Effort, ekspresi lewat Hadiah kecil', narasi: 'Receiving-mu lebih ke tindakan nyata, sedangkan Giving-mu lebih ke perhatian kecil yang personal. Kamu paling nyaman dicintai lewat bantuan dan effort yang meringankan bebanmu, tapi saat menunjukkan sayang, kamu cenderung memberi sesuatu yang thoughtful dan menunjukkan bahwa kamu kepikiran dia.' },
    'D-D': { type: 'Si paling Effort tanpa banyak bicara',     narasi: 'Receiving-mu dan Giving-mu sama-sama kuat di tindakan nyata. Kamu paling nyaman dicintai lewat bantuan dan effort kecil, dan kamu juga menunjukkan sayang dengan cara membantu, turun tangan, atau membuat hidup orang yang kamu sayang terasa lebih ringan.' },
    'D-E': { type: 'Si butuh Tindakan nyata, ekspresi lewat Pelukan', narasi: 'Receiving-mu lebih ke tindakan nyata, sedangkan Giving-mu lebih ke kedekatan fisik. Kamu paling nyaman dicintai lewat bantuan dan effort, tapi saat menunjukkan sayang, kamu cenderung memberi pelukan, sentuhan kecil, atau affection yang bikin hubungan terasa lebih hangat.' },
    'E-A': { type: 'Si butuh Dipeluk, ekspresi lewat Kata',    narasi: 'Receiving-mu lebih ke kedekatan fisik, sedangkan Giving-mu lebih ke kata-kata. Kamu paling nyaman dicintai lewat pelukan, sentuhan kecil, atau kedekatan yang bikin aman, tapi saat menunjukkan sayang, kamu cenderung memakai kata-kata yang menguatkan dan bikin pasangan merasa berarti.' },
    'E-B': { type: 'Si butuh kedekatan, ekspresi lewat Hadir', narasi: 'Receiving-mu lebih ke kedekatan fisik, sedangkan Giving-mu lebih ke kehadiran. Kamu paling nyaman dicintai lewat sentuhan hangat dan kedekatan fisik, tapi saat menunjukkan sayang, kamu cenderung hadir, menemani, dan memberi waktu berkualitas.' },
    'E-C': { type: 'Si butuh Sentuhan, ekspresi lewat Hadiah', narasi: 'Receiving-mu lebih ke kedekatan fisik, sedangkan Giving-mu lebih ke perhatian kecil yang personal. Kamu paling nyaman dicintai lewat pelukan, genggaman tangan, atau sentuhan hangat, tapi saat menunjukkan sayang, kamu cenderung memberi sesuatu yang thoughtful dan bikin pasangan merasa dipikirin.' },
    'E-D': { type: 'Si butuh afeksi Fisik, ekspresi lewat Effort', narasi: 'Receiving-mu lebih ke kedekatan fisik, sedangkan Giving-mu lebih ke tindakan nyata. Kamu paling nyaman dicintai lewat sentuhan hangat yang bikin aman, tapi saat menunjukkan sayang, kamu cenderung membantu, turun tangan, atau melakukan effort yang bikin hidup pasangan terasa lebih ringan.' },
    'E-E': { type: 'Si Physical Touch Baby',                   narasi: 'Receiving-mu dan Giving-mu sama-sama kuat di kedekatan fisik. Kamu paling nyaman dicintai lewat sentuhan hangat, dan kamu juga natural menunjukkan sayang lewat pelukan, gandengan tangan, atau affection kecil yang bikin hubungan terasa dekat, aman, dan nyaman.' }
  },

  // ─── SCORING FUNCTION ────────────────────────────────────────────────

  calculateScore(answers) {
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    const q11Pts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    const questions = [...LL.questions.receiving, ...LL.questions.giving]; // caller passes the right set

    answers.forEach(({ questionNo, rankOrder }) => {
      const isQ11 = questionNo === 11;
      const q = answers.__questions.find(q => q.no === questionNo);
      if (!q) return;

      if (!isQ11) {
        // Q1-Q10: rank1=3pts, rank2=2pts, rank3=1pt
        rankOrder.forEach((code, i) => {
          const pts = 3 - i; // i=0 → 3pts, i=1 → 2pts, i=2 → 1pt
          scores[code] += pts;
        });
      } else {
        // Q11: rank1=5pts … rank5=1pt → tiebreaker only
        rankOrder.forEach((code, i) => {
          q11Pts[code] = 5 - i;
        });
      }
    });

    // Sort by score desc, tiebreak by Q11 pts desc
    const sorted = Object.entries(scores)
      .sort(([ca, sa], [cb, sb]) => sb - sa || q11Pts[cb] - q11Pts[ca]);

    return {
      primary:   sorted[0][0],
      secondary: sorted[1][0],
      scores,
      q11Pts
    };
  }
};
