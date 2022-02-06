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

![adsadas](https://user-images.githubusercontent.com/97128581/152684942-e7d1af7b-8807-4e7c-a903-d1181f420614.png)


Uygulamaya aşağıdaki linklerden erişebilirsiniz.

http://54.159.195.14/ <br />
http://54.159.195.14/temperature?city=ankara <br />
http://ec2-54-159-195-14.compute-1.amazonaws.com/ <br />
http://ec2-54-159-195-14.compute-1.amazonaws.com/temperature?city=ankara

## Görev 3 denemesi

--DENEME.1--
Uygulamamı CI/CD araçlarından Github Actions ile derleyerek hedef sunucuda container olarak çalıştırmak istedim.

Github actions kullanmak için bir pipeline oluşturmam gerekti ve oluşturacağım pipeline'ı yazmak için aws.yml uzantılı bi dosya oluşturdum.

Oluşturduğum yml dosyası CI yaparak ne zaman github üzerinden bir commit atılırsa Aws Ecr servisine docker ile build alarak oluşturduğu image'i pushlayacak.

Github Actions üzerinden kontrol ettiğimde jobların sorunsuz bir şekilde çalıştığını ve image dosyasının aws ecr servisindeki repoma pushlandığını görebildim.
![Adsız](https://user-images.githubusercontent.com/97128581/152684617-cb4fae9c-b19a-4dc9-ae50-10a1475c9cec.png)

--DENEME.2--
Uygulamamı Github Actions ile derleyerek Heroku üzerinde container olarak çalıştırmak istedim

Bir pipeline oluşturdum ve main.yml dosyasının içine yazdım.

Pipeline öncelikle github üzerinden commit atılan uygulamayı docker ile build almalı, sonrasında ise build aldığı uygulamayı Heroku reposuna pushlayarak orda container olarak çalıştırmalıydı.

Pipeline'ı çalıştırıp commit attığımda uygulamayı docker ile build alıp Heroku reposuna pushladığını gördüm.

![her](https://user-images.githubusercontent.com/97128581/152685172-a94f40a7-65d9-40be-8c45-f646cba1e4ca.png)

Ancak Heroku üzerinden uygulamamı çalıştırmayı denediğimde hata aldım.
