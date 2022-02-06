# Best Cloud For Me Academy Case Study Api

Merhaba, bu içerik bestcloudforme academy programı için istenen case api'ı içerir.

## Dockerfile İle Build Alma ve Uygulamayı Çalıştırma.

Yüklemeyi desktoptaki uygulama klasörüne yapacağımız için önce klasöre gidiyoruz.

```bash
cd C:\Users\salih\Desktop\bcfmapi
```

Uygulamamızı node.js ile yazdığımız için ihtiyacımız olan modülleri kurmamız gerekli, bunun için

```bash
npm install
```

yazarak npm kuruyoruz.

Uygulamamızı build almak için repo içinde bulunan daha önceden hazırlamış olduğum Dockerfile dosyasını kullanacağız.(Docker file içerisinde ihtiyacımız olan node kaynağı için daha az alan kaplayan alpine versiyonu seçilmiştir.)

```bash
docker build -t bcfmapi .
```

komutuyla bcfmapi taginde bir docker build alma işlemini başarılı bir şekilde gerçekleştirebilirsiniz.

Uygulamamızı interactive terminalde detach modda default atanmış 8080 portu dışında 3000 portunu kullanarak çalıştırmak için

```bash
docker run -it -d -p 3000:8080 bcfmapi
```
Komutunu kullanıyoruz.
