import SkeletonLib, { SkeletonProps } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export function Skeleton(props: SkeletonProps){
    return <SkeletonLib baseColor="#fff" highlightColor="#0000ff" {...props} />
}