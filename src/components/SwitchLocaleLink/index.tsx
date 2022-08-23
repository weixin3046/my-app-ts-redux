interface SwitchLocaleLinkProps {
  children: React.ReactNode;
}

export function SwitchLocaleLink({ children }: SwitchLocaleLinkProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
