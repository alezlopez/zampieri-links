import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LinkButton } from "@/components/LinkButton";
import { GraduationCap, ShirtIcon, Bus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/48bc1842-7d21-482f-9b13-d3f603a21e8b.png" 
              alt="Logo Colégio Zampieri" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            Links Úteis
          </h1>
          <h2 className="text-lg font-medium text-muted-foreground">
            Colégio Zampieri
          </h2>
        </div>

        {/* Lista de Materiais */}
        <Card className="border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-primary">
              <GraduationCap className="h-5 w-5" />
              Lista de Materiais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <LinkButton 
              href="https://drive.google.com/file/d/19sbIUyL53Nkyi8fDrthFaic71KdBobSA/view?usp=sharing"
              variant="primary"
            >
              Educação Infantil
            </LinkButton>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="fundamental1" className="border-border">
                <AccordionTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-md">
                  <span className="text-base font-medium">Ens. Fundamental I (1º ao 5º Ano)</span>
                </AccordionTrigger>
                <AccordionContent className="pt-3 space-y-2">
                  <LinkButton 
                    href="https://drive.google.com/file/d/1YY-pmwgiE4EqMpYH1hmflMg2zes4Fan_/view?usp=drive_link"
                    variant="secondary"
                  >
                    1º ano
                  </LinkButton>
                  <LinkButton 
                    href="https://drive.google.com/file/d/1Lj3cEJxEjrrDrMboMJso42DjKmzG4OI7/view?usp=drive_link"
                    variant="secondary"
                  >
                    2º ano
                  </LinkButton>
                  <LinkButton 
                    href="https://drive.google.com/file/d/1Q8gHlpvHlJ7T1kObtCyi0MrC5yl1HkyR/view?usp=drive_link"
                    variant="secondary"
                  >
                    3º ano
                  </LinkButton>
                  <LinkButton 
                    href="https://drive.google.com/file/d/1abnY4MWdhGS1WCbtyqRx3v1OphVps9za/view?usp=drive_link"
                    variant="secondary"
                  >
                    4º ano
                  </LinkButton>
                  <LinkButton 
                    href="https://drive.google.com/file/d/1xWPqncPDSH2AaUiGxdgsZ7eYVFjB9g1y/view?usp=drive_link"
                    variant="secondary"
                  >
                    5º ano
                  </LinkButton>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <LinkButton 
              href="https://drive.google.com/file/d/1mVten6_2tTzq7hykp-FBX6BdAAZ54iEo/view?usp=sharing"
              variant="primary"
            >
              Ensino Fundamental II (6º ao 9º Ano)
            </LinkButton>

            <LinkButton 
              href="https://drive.google.com/file/d/1bpAWAmg80HgtHVbwagtMR_05r7CLdV6z/view?usp=drive_link"
              variant="primary"
            >
              Ensino Médio
            </LinkButton>
          </CardContent>
        </Card>

        {/* Valores de Uniformes */}
        <Card className="border-accent/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-accent">
              <ShirtIcon className="h-5 w-5" />
              Valores de Uniformes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LinkButton 
              href="https://drive.google.com/file/d/1f3SjNH-AsXKfoaLtawpJLpvGFECn8D7U/view?usp=sharing"
              variant="accent"
            >
              Uniformes
            </LinkButton>
          </CardContent>
        </Card>

        {/* Transporte Escolar */}
        <Card className="border-secondary/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-secondary-foreground">
              <Bus className="h-5 w-5" />
              Transporte Escolar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LinkButton 
              href="https://drive.google.com/file/d/1kED2Y4LBAyVkI6Zf8MJ9fTnGMNVoFEGg/view?usp=sharing"
              variant="secondary"
            >
              Relação de 'tios'
            </LinkButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;