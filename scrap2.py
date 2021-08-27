import requests
from bs4 import BeautifulSoup as bs





class Declinator:
    def __init__(self, slovo):
        self.slovo = slovo

    def get_declinations(self):
        url = "https://cs.wiktionary.org/wiki/" + self.slovo

        r = requests.get(url)
        soup = bs(r.content, "lxml")
        decl = soup.findAll("table", {"class" : "deklinace substantivum"})

        nenasel = False

        scraped_declensions = []

        try:
            bunka = decl[0].findChildren("td")

            for i in range(len(bunka)):
                scraped_declensions.append(bunka[i].text)

        except:
            nenasel = True
            return "no declensions"

        if nenasel == True:
            decl = soup.findAll("table", {"class" : "deklinace adjektivum"})
            try:
                bunka = decl[0].findChildren("td")

                for i in range(len(bunka)):
                    scraped_declensions.append(bunka[i].text)


            except:
                return "no declensions"

        return scraped_declensions




#pes = Declinator("postel")

#print(pes.get_declinations())
