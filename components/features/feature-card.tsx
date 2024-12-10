import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronUp } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  tags: string[];
  votes: number;
}

export function FeatureCard({ title, description, tags, votes }: FeatureCardProps) {
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="flex items-center space-x-1 text-green-600">
            <ChevronUp className="h-4 w-4" />
            <span>{votes}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
