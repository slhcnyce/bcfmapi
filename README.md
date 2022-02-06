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






# Çalışmalar
Görev 3 ve Görev 4 denemelerimden ve çalışmalarımdan bu başlık altında bahsedeceğim.

## Görev 4 denemesi
Build aldığım image dosyasını çalıştırmak için aws ec2 kullanma kararı aldım.

Image dosyamı ec2'ya pushlamak için dockerhub kullandım.

Dockerhub üzerinden uygulamama

```bash
docker run slhcnyce/bcfmapi
```
komutu ile erişebilirsiniz.

Ec2 instance'ime bağlanıp docker kurdum.

Ec2 üzerinden dockerhubdan çekmiş olduğum image dosyamı çalıştırdım.

Uygulamaya aşağıdaki linklerden erişebilirsiniz.

http://54.159.195.14/
http://54.159.195.14/temperature?city=ankara
http://ec2-54-159-195-14.compute-1.amazonaws.com/
http://ec2-54-159-195-14.compute-1.amazonaws.com/temperature?city=ankara

## Görev 3 denemesi
Uygulamamı CI/CD araçlarından Github Actions ile derleyerek hedef sunucuda container olarak çalıştırmak istedim.

Github actions kullanmak için bir pipeline oluşturmam gerekti ve oluşturacağım pipeline'ı yazmak için aws.yml uzantılı bi dosya oluşturdum.

Oluşturduğum yml dosyası CI yaparak ne zaman github üzerinden bir commit atılırsa Aws Ecr servisine docker ile build alarak oluşturduğu image'i pushlayacak.

Github Actions üzerinden kontrol ettiğimde jobların sorunsuz bir şekilde çalıştığını ve image dosyasının aws ecr servisindeki repoma pushlandığını görebildim.
![Adsız](https://user-images.githubusercontent.com/97128581/152684617-cb4fae9c-b19a-4dc9-ae50-10a1475c9cec.png)
