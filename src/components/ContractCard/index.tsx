import { List } from "antd";
import { AvatarSize } from "antd/lib/avatar/SizeContext";
import DefauldCardPage from "./DefaultCard";

interface ContractCardPageProps {
  loading?: boolean;
  data: any[];
  gutter?: number;
  column?: number;
  AvatarSize?: AvatarSize;
  title?: string;
}

export default function ContractCardPage({
  loading,
  data,
  gutter,
  column,
  AvatarSize,
  title,
}: ContractCardPageProps) {
  return (
    <>
      <List
        loading={loading}
        grid={{ gutter: gutter || 24, column: column || 4 }}
        dataSource={data}
        rowKey={(item) => item.id}
        renderItem={(item: any) => (
          <List.Item>
            <DefauldCardPage item={item} />
          </List.Item>
        )}
      />
    </>
  );
}
