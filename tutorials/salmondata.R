Bon_chinook_2023 <- read.csv("tutorials/adultdaily_1722285710_144.csv")
Bon_chinook_2023 <- Bon_chinook_2023[-c(374:387),]
Bon_chinook1<- mutate(Bon_chinook1, `2023:BON:Chin (fish/day)` = Bon_chinook_2023$Chin)

