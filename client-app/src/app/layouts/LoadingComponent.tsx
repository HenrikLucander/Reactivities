
interface Props {
    inverted?: boolean;
    content?: string;
}

export default function LoadingComponent({ inverted = true, content = 'Loading...' }: Props) {
    return (
        <div className="ui active inverted dimmer">
            <div className="ui text loader">
                {content}
            </div>
        </div>
    )
}