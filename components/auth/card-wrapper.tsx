import { Card, CardHeader, CardContent, CardFooter } from "@components/ui/card";

import Header from "@components/auth/header";
import Social from "@components/auth/social";
import BackButton from "@components/auth/back-button";

interface BackButtonProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial: boolean;
}

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: BackButtonProps) {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}
