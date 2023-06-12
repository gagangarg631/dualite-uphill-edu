import {
  Gradient,
  NFTS,
  Valentine,
  GrastroHealth,
  Halloween,
  WatterBuddies,
  Fanta,
  Drawing,
  DanceAcademy,
  DesignPrinciple,
  Advocate,
  Oliva,
  School,
  TempClosed,
  Calling,
  WomensDay,
  WorldOceanDay,
  Victory,
  InviteCard,
  OpenBoard,
  SoftDrink,
  ColdBeer,
  EidFestival,
} from "../../components/fontMatchingGame";
import useFontMatch from "../../hooks/useFontMatch";
import AudioPlayer from "../../components/AudioPlayer"

const FontMatching = () => {
  const {
    steper: { step },
    gameSoundRef
  } = useFontMatch();

  return (
    <>
      <AudioPlayer loop src='bgSound.mp3' ref={gameSoundRef} />
      {step === 0 && <Gradient />}
      {step === 1 && <NFTS />}
      {step === 2 && <GrastroHealth />}
      {step === 3 && <Halloween />}
      {step === 4 && <Valentine />}
      {step === 5 && <WatterBuddies />}
      {step === 6 && <Fanta />}
      {step === 7 && <Drawing />}
      {step === 8 && <DanceAcademy />}
      {step === 9 && <DesignPrinciple />}
      {step === 10 && <Advocate />}
      {step === 11 && <Oliva />}
      {step === 12 && <School />}
      {step === 13 && <TempClosed />}
      {step === 14 && <Calling />}
      {step === 15 && <WomensDay />}
      {step === 16 && <WorldOceanDay />}
      {step === 17 && <Victory />}
      {step === 18 && <InviteCard />}
      {step === 19 && <OpenBoard />}
      {step === 20 && <SoftDrink />}
      {step === 21 && <ColdBeer />}
      {step === 22 && <EidFestival />}
    </>
  );
};

export default FontMatching;
